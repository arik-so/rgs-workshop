console.log('yo!')

import {createApp} from 'vue'
// import * as d3Module from 'd3';
import * as ldk from '../../node_modules/lightningdevkit/index.mjs';

const app = createApp({
	data() {
		return {
			message: 'Hello Vue!',
			initiatedDownload: false,
			isSnapshotParsed: false,
			status: 'Idle',
			highlightedNode: {},
			highlightedSelection: null,
			_maxRenderedChannelCount: 1000
		}
	},

	beforeMount() {
		this.populateLesMisGraph(true)
	},

	mounted() {
		this.initializeLDK()
	},

	computed: {
		graphData: function () {
			if (!this.isSnapshotParsed) {
				return this.dummyGraphData();
			}
			return this.getNetworkGraphData();
		},
		maxRenderedChannelCount: {
			// getter
			get() {
				return this._maxRenderedChannelCount
			},
			// setter
			set(newValue) {
				// lock it between 10 and 5000
				if (!isFinite(newValue)){
					return;
				}
				let newCount = Math.min(Math.max(newValue, 1), 5000);
				console.log('new max rendered channel count:', newCount);
				this._maxRenderedChannelCount = newCount
			}
		},
		lastClickedDetails: function() {
			const rawObject = this.highlightedNode;
			console.log('last clicked details:', rawObject);
			if (!rawObject || !rawObject.id){
				// return '&lt;N/A&gt;'
				return '<span style="font-style: italic; color: #555;">none</span>'
			}
			if (rawObject.id.length !== 66) {
				return JSON.stringify({
					id: rawObject.id,
					name: rawObject.name
				}, null, 4)
			}
			let color = this.getNodeColor(rawObject.id, 1, 0.7);
			return JSON.stringify({
				// zero-width space so the 0x doesn't get highlighted during selection
				pubkey: `<a style='color: ${color};' href='https://1ml.com/node/${rawObject.id}' target="_blank">0x&#8203;${rawObject.id}</a>`
			}, null, 4)
		}
	},

	methods: {
		async initializeLDK() {
			// make sure this only runs once
			if (this.hasInitializedLDK) {
				return;
			}
			this.hasInitializedLDK = true;

			// NOTE: THIS WILL VARY DUE TO THE NATURE OF MODULES!
			await ldk.initializeWasmWebFetch('./node_modules/lightningdevkit/liblightningjs.wasm');

			class DemoLoggerInterface {
				log(record) {
					// duck-typing, a necessary evil in the browser
					if (!(record instanceof ldk.Record)) {
						return;
					}
					console.log(`\nLDK log: (${record.get_level()}): ${record.get_file()}:${record.get_line()}:\n> ${record.get_args()}\n`);
				}
			}

			let loggerInterface = new DemoLoggerInterface()
			this.logger = ldk.Logger.new_impl(loggerInterface)

			const genesisHashHex = '6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000';
			const genesisHash = this.fromHex(genesisHashHex).reverse();
			this.networkGraph = ldk.NetworkGraph.constructor_new(genesisHash, this.logger);

			this.rapidGossipSync = ldk.RapidGossipSync.constructor_new(this.networkGraph);
		},

		async downloadGraph() {
			this.initiatedDownload = true;
			this.status = 'Downloading…';
			const url = 'https://rapidsync.lightningdevkit.org/snapshot/0'
			console.log('Initiating download…');
			const downloadStart = new Date();
			const graphResponse = await fetch(url);
			const arrayBuffer = await graphResponse.arrayBuffer();
			const downloadEnd = new Date();
			const downloadElapsed = downloadEnd - downloadStart;
			console.log(`Download complete! (${downloadElapsed}ms)`);

			const graphData = new Uint8Array(arrayBuffer);

			this.status = 'Parsing…';
			console.log('Initiating parsing…');
			const parsingStart = new Date();
			this.rapidGossipSync.update_network_graph(graphData);
			const parsingEnd = new Date();
			const parsingElapsed = parsingEnd - parsingStart;
			console.log(`Parsing complete! (${parsingElapsed}ms)`);

			// await this.populateGraph();
			this.status = 'Complete!'
			this.isSnapshotParsed = true;
		},

		getNetworkGraphData(useChannelRestriction = false) {
			let responseObject = {
				nodes: [],
				links: []
			};

			let referencedNodes = new Set();

			console.log('Converting graph to D3 representation…');
			const conversionStart = new Date();

			let readOnlyGraph = this.networkGraph.read_only();
			let channels = readOnlyGraph.list_channels();
			for (const currentChannel of channels) {
				if (useChannelRestriction && responseObject.links.length === this.maxRenderedChannelCount) {
					break;
				}

				// get the linked node ids
				const channelInfo = readOnlyGraph.channel(currentChannel);
				let nodeA = channelInfo.get_node_one().write();
				let nodeB = channelInfo.get_node_two().write();
				let nodeAHex = this.toHex(nodeA);
				let nodeBHex = this.toHex(nodeB);

				responseObject.links.push({
					source: nodeAHex,
					target: nodeBHex,
				})

				if (useChannelRestriction) {
					referencedNodes.add(nodeAHex);
					referencedNodes.add(nodeBHex);
				}

			}

			let usedNodeCount = 0;
			let nodes = readOnlyGraph.list_nodes();
			for (const currentNode of nodes) {
				let currentNodeId = currentNode.write();
				let currentNodeHex = this.toHex(currentNodeId);
				if (useChannelRestriction) {
					if (!referencedNodes.has(currentNodeHex)) {
						continue;
					}
				}

				let currentNodeInfo = readOnlyGraph.node(currentNode);
				let channelCount = currentNodeInfo.get_channels().length;
				let announcementInfo = currentNodeInfo.get_announcement_info();
				let color = announcementInfo.get_rgb();
				let addresses = announcementInfo.get_addresses();
				if (addresses.length > 0 || this.toHex(color) !== '000000') {
					debugger
				}
				responseObject.nodes.push({
					id: currentNodeHex,
					color,
					addresses,
					channelCount
				});
				usedNodeCount++;
			}

			readOnlyGraph.free();
			const conversionEnd = new Date();
			const conversionElapsed = conversionEnd - conversionStart;
			console.log(`D3 representation conversion complete! (${conversionElapsed}ms)`);

			console.log(`channel count: ${channels.length}`);
			console.log(`node count: ${nodes.length}`);

			if (useChannelRestriction) {
				console.log(`Used node count: ${usedNodeCount}`);
			}

			return responseObject;
		},

		getNodeColor(nodePublicKey, alpha = 1, factor = 1) {
			const currentNodeId = this.fromHex(nodePublicKey);
			// const hexColor = this.toHex(Uint8Array.from(currentNodeId.slice(2, 5)))
			const red = Math.round(currentNodeId[2] * factor);
			const green = Math.round(currentNodeId[3] * factor);
			const blue = Math.round(currentNodeId[4] * factor);
			return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
		},

		getAverageColor(nodeAPubkey, nodeBPubkey, alpha = 1){
			const nodeAId = this.fromHex(nodeAPubkey);
			const nodeBId = this.fromHex(nodeBPubkey);

			const red = Math.round((nodeAId[2] + nodeBId[2]) * 0.5);
			const green = Math.round((nodeAId[3] + nodeBId[4]) * 0.5);
			const blue = Math.round((nodeAId[3] + nodeBId[4]) * 0.5);
			return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
		},

		getWeightedAverageNodeColor(nodeAPubkey, nodeBPubkey, nodeAFactor, nodeBFactor, alpha = 1){
			const nodeAId = this.fromHex(nodeAPubkey);
			const nodeBId = this.fromHex(nodeBPubkey);

			const totalWeight = nodeAFactor + nodeBFactor;

			const red = Math.round((nodeAId[2] * nodeAFactor + nodeBId[2] * nodeBFactor) / totalWeight);
			const green = Math.round((nodeAId[3] * nodeAFactor + nodeBId[3] * nodeBFactor) / totalWeight);
			const blue = Math.round((nodeAId[4] * nodeAFactor + nodeBId[4] * nodeBFactor) / totalWeight);
			return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
		},

		async fetchGraphData(useDummyData = true) {
			if (useDummyData) {
				return this.dummyGraphData();
			} else {
				if (!this.isSnapshotParsed) {
					alert('Non-dummy data not yet available!');
					return;
				}
				return this.getNetworkGraphData(true);
			}
		},

		async populateLesMisGraph(useDummyData) {
			const data = await this.fetchGraphData(useDummyData);
			this.ForceGraph(data, {
				nodeTitle: (currentNode, index) => {
					if (currentNode.name) {
						return currentNode.name;
					}
					return currentNode.id;
				},
				nodeFill: (currentNode, index) => {
					if (!currentNode || !currentNode.id || currentNode.id.length !== 66) {
						return 'rgb(50, 50, 130)'
					}
					return this.getNodeColor(currentNode.id)
				},
				linkStroke: (currentLink) => {
					const sourceNode = data.nodes.find(n => n.id === currentLink.source);
					const targetNode = data.nodes.find(n => n.id === currentLink.target);

					if (sourceNode.channelCount && targetNode.channelCount){
						return this.getWeightedAverageNodeColor(sourceNode.id, targetNode.id, sourceNode.channelCount, targetNode.channelCount, 0.8)
						// if (sourceNode.channelCount > targetNode.channelCount){
						// 	return this.getNodeColor(sourceNode.id, 0.5);
						// } else if (sourceNode.channelCount > targetNode.channelCount){
						// 	return this.getNodeColor(targetNode.id, 0.5);
						// } else {
						// 	return this.getAverageColor(sourceNode.id, targetNode.id, 1)
						// }
					}

					return '#999';
				}
			});
		},

		ForceGraph({
					   nodes, // an iterable of node objects (typically [{id}, …])
					   links // an iterable of link objects (typically [{source, target}, …])
				   }, {
					   nodeId = d => d.id, // given d in nodes, returns a unique identifier (string)
					   nodeGroup, // given d in nodes, returns an (ordinal) value for color
					   nodeGroups, // an array of ordinal values representing the node groups
					   nodeTitle, // given d in nodes, a title string
					   nodeFill, // node stroke fill (if not using a group color encoding)
					   nodeStroke = '#fff', // node stroke color
					   nodeStrokeWidth = 1.5, // node stroke width, in pixels
					   nodeStrokeOpacity = 1, // node stroke opacity
					   nodeRadius = 5, // node radius, in pixels
					   nodeStrength,
					   linkSource = ({source}) => source, // given d in links, returns a node identifier string
					   linkTarget = ({target}) => target, // given d in links, returns a node identifier string
					   linkStroke = '#999', // link stroke color
					   linkStrokeOpacity = 0.6, // link stroke opacity
					   linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
					   linkStrokeLinecap = 'round', // link stroke linecap
					   linkStrength,
					   colors = d3.schemeTableau10, // an array of color strings, for the node groups
					   width = 640, // outer width, in pixels
					   height = 400, // outer height, in pixels
					   invalidation // when this promise resolves, stop the simulation
				   } = {}) {
			// Compute values.
			const N = d3.map(nodes, nodeId).map(intern);
			const LS = d3.map(links, linkSource).map(intern);
			const LT = d3.map(links, linkTarget).map(intern);
			if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
			const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
			const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
			const W = typeof linkStrokeWidth !== 'function' ? null : d3.map(links, linkStrokeWidth);
			const L = typeof linkStroke !== 'function' ? null : d3.map(links, linkStroke);

			// Replace the input nodes and links with mutable objects for the simulation.
			const originalNodes = nodes;
			nodes = d3.map(nodes, (_, i) => ({id: N[i]}));
			links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

			// Compute default domains.
			if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

			// Construct the scales.
			const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);
			const C = nodeFill == null ? null : d3.map(nodes, nodeFill);

			// Construct the forces.
			const forceNode = d3.forceManyBody();
			const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
			if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
			if (linkStrength !== undefined) forceLink.strength(linkStrength);

			const simulation = d3.forceSimulation(nodes)
				.force('link', forceLink)
				.force('charge', forceNode)
				.force('center', d3.forceCenter())
				.on('tick', ticked);


			const parentContainer = d3.select('#my_dataviz');
			const parentDimensions = parentContainer.node().getBoundingClientRect();
			// leave some padding
			width = parentDimensions.width - 20;
			height = parentDimensions.height - 50;


			const svg = d3.select('#d3_graph');
			// remove all previous children
			svg.selectAll('*').remove();

			svg
				.attr('width', width)
				.attr('height', height)
				.attr('viewBox', [-width / 2, -height / 2, width, height])
				.attr('style', 'max-width: 100%; height: auto; height: intrinsic;');


			const link = svg.append('g')
				.attr('stroke', typeof linkStroke !== 'function' ? linkStroke : null)
				.attr('stroke-opacity', linkStrokeOpacity)
				.attr('stroke-width', typeof linkStrokeWidth !== 'function' ? linkStrokeWidth : null)
				.attr('stroke-linecap', linkStrokeLinecap)
				.selectAll('line')
				.data(links)
				.join('line');

			const self = this;
			const selectionRadius = 8;
			const selectionStrokeWidth = 2.5;
			const selectionStrokeColor = '#aa0000';
			const node = svg.append('g')
				// .attr('fill', color)
				.attr('stroke', nodeStroke)
				.attr('stroke-opacity', nodeStrokeOpacity)
				.attr('stroke-width', nodeStrokeWidth)
				.selectAll('circle')
				.data(nodes)
				.join('circle')
				.attr('r', nodeRadius)
				.call(drag(simulation))
				.on('click', function(event) {
					if (self.highlightedSelection) {
						self.highlightedSelection.attr('r', nodeRadius)
						self.highlightedSelection.attr('stroke-width', nodeStrokeWidth)
						// self.highlightedSelection.attr('stroke', nodeStroke)
					}
					const selection = d3.select(this);
					self.highlightedSelection = selection;

					const index = this.__data__.index;
					const currentData = originalNodes[index];
					self.highlightedNode = currentData;

					selection.attr('r', selectionRadius);
					selection.attr('stroke-width', selectionStrokeWidth);
					// selection.attr('stroke', selectionStrokeColor);
				})
			;

			if (W) link.attr('stroke-width', ({index: i}) => W[i]);
			if (L) link.attr('stroke', ({index: i}) => L[i]);
			// if (G) node.attr('fill', ({index: i}) => color(G[i]));
			node.attr('fill', ({index: i}) => C[i]);
			if (T) node.append('title').text(({index: i}) => T[i]);
			if (invalidation != null) invalidation.then(() => simulation.stop());

			function intern(value) {
				return value !== null && typeof value === 'object' ? value.valueOf() : value;
			}

			function clicked(index) {
				alert('clicked at '+index)
			}

			function ticked() {
				link
					.attr('x1', d => d.source.x)
					.attr('y1', d => d.source.y)
					.attr('x2', d => d.target.x)
					.attr('y2', d => d.target.y);

				node
					.attr('cx', d => d.x)
					.attr('cy', d => d.y);
			}

			function drag(simulation) {
				function dragstarted(event) {
					if (!event.active) simulation.alphaTarget(0.3).restart();
					event.subject.fx = event.subject.x;
					event.subject.fy = event.subject.y;
				}

				function dragged(event) {
					event.subject.fx = event.x;
					event.subject.fy = event.y;
				}

				function dragended(event) {
					if (!event.active) simulation.alphaTarget(0);
					event.subject.fx = null;
					event.subject.fy = null;
				}

				return d3.drag()
					.on('start', dragstarted)
					.on('drag', dragged)
					.on('end', dragended);
			}

			return Object.assign(svg.node(), {scales: {color}});
		},

		// Fast Uint8Array to hex
		toHex(bytes) {
			return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
		},

		// Mimics Buffer.from(x, 'hex') logic
		// Stops on first non-hex string and returns
		// https://github.com/nodejs/node/blob/v14.18.1/src/string_bytes.cc#L246-L261
		fromHex(hexString) {
			return Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
		},

		dummyGraphData() {
			const dummyData = {
				'nodes': [
					{
						'id': '1',
						'name': 'A'
					},
					{
						'id': '2',
						'name': 'B'
					},
					{
						'id': '3',
						'name': 'C'
					},
					{
						'id': '4',
						'name': 'D'
					},
					{
						'id': '5',
						'name': 'E'
					},
					{
						'id': '6',
						'name': 'F'
					},
					{
						'id': '7',
						'name': 'G'
					},
					{
						'id': '8',
						'name': 'H'
					},
					{
						'id': '9',
						'name': 'I'
					},
					{
						'id': '10',
						'name': 'J'
					}
				],
				'links': [
					{
						'source': '1',
						'target': '2'
					},
					{
						'source': '1',
						'target': '5'
					},
					{
						'source': '1',
						'target': '6'
					},
					{
						'source': '2',
						'target': '3'
					},
					{
						'source': '2',
						'target': '7'
					},
					{
						'source': '3',
						'target': '4'
					},
					{
						'source': '8',
						'target': '3'
					},
					{
						'source': '4',
						'target': '5'
					},
					{
						'source': '4',
						'target': '9'
					},
					{
						'source': '5',
						'target': '10'
					}
				]
			};
			return dummyData;
		},

	}
})
app.mount('#app');
