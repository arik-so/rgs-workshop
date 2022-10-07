import { Option_u32Z } from '../structs/Option_u32Z.mjs';
import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { Logger } from '../structs/Logger.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { Option_AccessZ } from '../structs/Option_AccessZ.mjs';
import { Result_NoneLightningErrorZ } from '../structs/Result_NoneLightningErrorZ.mjs';
import { Result_NetworkGraphDecodeErrorZ } from '../structs/Result_NetworkGraphDecodeErrorZ.mjs';
import { UnsignedChannelAnnouncement } from '../structs/UnsignedChannelAnnouncement.mjs';
import { UnsignedChannelUpdate } from '../structs/UnsignedChannelUpdate.mjs';
import { UnsignedNodeAnnouncement } from '../structs/UnsignedNodeAnnouncement.mjs';
import { NodeAnnouncement } from '../structs/NodeAnnouncement.mjs';
import { EventHandler } from '../structs/EventHandler.mjs';
import { ReadOnlyNetworkGraph } from '../structs/ReadOnlyNetworkGraph.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Represents the network as nodes and channels between them
 */
export declare class NetworkGraph extends CommonBase {
    /**
     * Constructs a new EventHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventHandler must be freed before this_arg is
     */
    as_EventHandler(): EventHandler;
    /**
     * Serialize the NetworkGraph object into a byte array which can be read by NetworkGraph_read
     */
    write(): Uint8Array;
    /**
     * Read a NetworkGraph from a byte array, created by NetworkGraph_write
     */
    static constructor_read(ser: Uint8Array, arg: Logger): Result_NetworkGraphDecodeErrorZ;
    /**
     * Creates a new, empty, network graph.
     */
    static constructor_new(genesis_hash: Uint8Array, logger: Logger): NetworkGraph;
    /**
     * Returns a read-only view of the network graph.
     */
    read_only(): ReadOnlyNetworkGraph;
    /**
     * The unix timestamp provided by the most recent rapid gossip sync.
     * It will be set by the rapid sync process after every sync completion.
     */
    get_last_rapid_gossip_sync_timestamp(): Option_u32Z;
    /**
     * Update the unix timestamp provided by the most recent rapid gossip sync.
     * This should be done automatically by the rapid sync process after every sync completion.
     */
    set_last_rapid_gossip_sync_timestamp(last_rapid_gossip_sync_timestamp: number): void;
    /**
     * For an already known node (from channel announcements), update its stored properties from a
     * given node announcement.
     *
     * You probably don't want to call this directly, instead relying on a P2PGossipSync's
     * RoutingMessageHandler implementation to call it indirectly. This may be useful to accept
     * routing messages from a source using a protocol other than the lightning P2P protocol.
     */
    update_node_from_announcement(msg: NodeAnnouncement): Result_NoneLightningErrorZ;
    /**
     * For an already known node (from channel announcements), update its stored properties from a
     * given node announcement without verifying the associated signatures. Because we aren't
     * given the associated signatures here we cannot relay the node announcement to any of our
     * peers.
     */
    update_node_from_unsigned_announcement(msg: UnsignedNodeAnnouncement): Result_NoneLightningErrorZ;
    /**
     * Store or update channel info from a channel announcement.
     *
     * You probably don't want to call this directly, instead relying on a P2PGossipSync's
     * RoutingMessageHandler implementation to call it indirectly. This may be useful to accept
     * routing messages from a source using a protocol other than the lightning P2P protocol.
     *
     * If a `chain::Access` object is provided via `chain_access`, it will be called to verify
     * the corresponding UTXO exists on chain and is correctly-formatted.
     */
    update_channel_from_announcement(msg: ChannelAnnouncement, chain_access: Option_AccessZ): Result_NoneLightningErrorZ;
    /**
     * Store or update channel info from a channel announcement without verifying the associated
     * signatures. Because we aren't given the associated signatures here we cannot relay the
     * channel announcement to any of our peers.
     *
     * If a `chain::Access` object is provided via `chain_access`, it will be called to verify
     * the corresponding UTXO exists on chain and is correctly-formatted.
     */
    update_channel_from_unsigned_announcement(msg: UnsignedChannelAnnouncement, chain_access: Option_AccessZ): Result_NoneLightningErrorZ;
    /**
     * Update channel from partial announcement data received via rapid gossip sync
     *
     * `timestamp: u64`: Timestamp emulating the backdated original announcement receipt (by the
     * rapid gossip sync server)
     *
     * All other parameters as used in [`msgs::UnsignedChannelAnnouncement`] fields.
     */
    add_channel_from_partial_announcement(short_channel_id: bigint, timestamp: bigint, features: ChannelFeatures, node_id_1: Uint8Array, node_id_2: Uint8Array): Result_NoneLightningErrorZ;
    /**
     * Marks a channel in the graph as failed if a corresponding HTLC fail was sent.
     * If permanent, removes a channel from the local storage.
     * May cause the removal of nodes too, if this was their last channel.
     * If not permanent, makes channels unavailable for routing.
     */
    channel_failed(short_channel_id: bigint, is_permanent: boolean): void;
    /**
     * Marks a node in the graph as failed.
     */
    node_failed(_node_id: Uint8Array, is_permanent: boolean): void;
    /**
     * Removes information about channels that we haven't heard any updates about in some time.
     * This can be used regularly to prune the network graph of channels that likely no longer
     * exist.
     *
     * While there is no formal requirement that nodes regularly re-broadcast their channel
     * updates every two weeks, the non-normative section of BOLT 7 currently suggests that
     * pruning occur for updates which are at least two weeks old, which we implement here.
     *
     * This function takes the current unix time as an argument. For users with the `std` feature
     * enabled, [`NetworkGraph::remove_stale_channels`] may be preferable.
     */
    remove_stale_channels_with_time(current_time_unix: bigint): void;
    /**
     * For an already known (from announcement) channel, update info about one of the directions
     * of the channel.
     *
     * You probably don't want to call this directly, instead relying on a P2PGossipSync's
     * RoutingMessageHandler implementation to call it indirectly. This may be useful to accept
     * routing messages from a source using a protocol other than the lightning P2P protocol.
     *
     * If built with `no-std`, any updates with a timestamp more than two weeks in the past or
     * materially in the future will be rejected.
     */
    update_channel(msg: ChannelUpdate): Result_NoneLightningErrorZ;
    /**
     * For an already known (from announcement) channel, update info about one of the directions
     * of the channel without verifying the associated signatures. Because we aren't given the
     * associated signatures here we cannot relay the channel update to any of our peers.
     *
     * If built with `no-std`, any updates with a timestamp more than two weeks in the past or
     * materially in the future will be rejected.
     */
    update_channel_unsigned(msg: UnsignedChannelUpdate): Result_NoneLightningErrorZ;
}
