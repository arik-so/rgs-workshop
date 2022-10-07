import { Option_u32Z } from '../structs/Option_u32Z.mjs';
import { Result_NoneLightningErrorZ } from '../structs/Result_NoneLightningErrorZ.mjs';
import { Result_NetworkGraphDecodeErrorZ } from '../structs/Result_NetworkGraphDecodeErrorZ.mjs';
import { EventHandler } from '../structs/EventHandler.mjs';
import { ReadOnlyNetworkGraph } from '../structs/ReadOnlyNetworkGraph.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents the network as nodes and channels between them
 */
export class NetworkGraph extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NetworkGraph_free);
    }
    /**
     * Constructs a new EventHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventHandler must be freed before this_arg is
     */
    as_EventHandler() {
        const ret = bindings.NetworkGraph_as_EventHandler(this.ptr);
        const ret_hu_conv = new EventHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the NetworkGraph object into a byte array which can be read by NetworkGraph_read
     */
    write() {
        const ret = bindings.NetworkGraph_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NetworkGraph from a byte array, created by NetworkGraph_write
     */
    static constructor_read(ser, arg) {
        const ret = bindings.NetworkGraph_read(bindings.encodeUint8Array(ser), arg == null ? 0n : CommonBase.get_ptr_of(arg));
        const ret_hu_conv = Result_NetworkGraphDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, arg);
        return ret_hu_conv;
    }
    /**
     * Creates a new, empty, network graph.
     */
    static constructor_new(genesis_hash, logger) {
        const ret = bindings.NetworkGraph_new(bindings.encodeUint8Array(bindings.check_arr_len(genesis_hash, 32)), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_hu_conv = new NetworkGraph(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        return ret_hu_conv;
    }
    /**
     * Returns a read-only view of the network graph.
     */
    read_only() {
        const ret = bindings.NetworkGraph_read_only(this.ptr);
        const ret_hu_conv = new ReadOnlyNetworkGraph(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The unix timestamp provided by the most recent rapid gossip sync.
     * It will be set by the rapid sync process after every sync completion.
     */
    get_last_rapid_gossip_sync_timestamp() {
        const ret = bindings.NetworkGraph_get_last_rapid_gossip_sync_timestamp(this.ptr);
        const ret_hu_conv = Option_u32Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Update the unix timestamp provided by the most recent rapid gossip sync.
     * This should be done automatically by the rapid sync process after every sync completion.
     */
    set_last_rapid_gossip_sync_timestamp(last_rapid_gossip_sync_timestamp) {
        bindings.NetworkGraph_set_last_rapid_gossip_sync_timestamp(this.ptr, last_rapid_gossip_sync_timestamp);
    }
    /**
     * For an already known node (from channel announcements), update its stored properties from a
     * given node announcement.
     *
     * You probably don't want to call this directly, instead relying on a P2PGossipSync's
     * RoutingMessageHandler implementation to call it indirectly. This may be useful to accept
     * routing messages from a source using a protocol other than the lightning P2P protocol.
     */
    update_node_from_announcement(msg) {
        const ret = bindings.NetworkGraph_update_node_from_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * For an already known node (from channel announcements), update its stored properties from a
     * given node announcement without verifying the associated signatures. Because we aren't
     * given the associated signatures here we cannot relay the node announcement to any of our
     * peers.
     */
    update_node_from_unsigned_announcement(msg) {
        const ret = bindings.NetworkGraph_update_node_from_unsigned_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
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
    update_channel_from_announcement(msg, chain_access) {
        const ret = bindings.NetworkGraph_update_channel_from_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg), CommonBase.get_ptr_of(chain_access));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        CommonBase.add_ref_from(this, chain_access);
        return ret_hu_conv;
    }
    /**
     * Store or update channel info from a channel announcement without verifying the associated
     * signatures. Because we aren't given the associated signatures here we cannot relay the
     * channel announcement to any of our peers.
     *
     * If a `chain::Access` object is provided via `chain_access`, it will be called to verify
     * the corresponding UTXO exists on chain and is correctly-formatted.
     */
    update_channel_from_unsigned_announcement(msg, chain_access) {
        const ret = bindings.NetworkGraph_update_channel_from_unsigned_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg), CommonBase.get_ptr_of(chain_access));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        CommonBase.add_ref_from(this, chain_access);
        return ret_hu_conv;
    }
    /**
     * Update channel from partial announcement data received via rapid gossip sync
     *
     * `timestamp: u64`: Timestamp emulating the backdated original announcement receipt (by the
     * rapid gossip sync server)
     *
     * All other parameters as used in [`msgs::UnsignedChannelAnnouncement`] fields.
     */
    add_channel_from_partial_announcement(short_channel_id, timestamp, features, node_id_1, node_id_2) {
        const ret = bindings.NetworkGraph_add_channel_from_partial_announcement(this.ptr, short_channel_id, timestamp, features == null ? 0n : CommonBase.get_ptr_of(features), bindings.encodeUint8Array(bindings.check_arr_len(node_id_1, 33)), bindings.encodeUint8Array(bindings.check_arr_len(node_id_2, 33)));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, features);
        return ret_hu_conv;
    }
    /**
     * Marks a channel in the graph as failed if a corresponding HTLC fail was sent.
     * If permanent, removes a channel from the local storage.
     * May cause the removal of nodes too, if this was their last channel.
     * If not permanent, makes channels unavailable for routing.
     */
    channel_failed(short_channel_id, is_permanent) {
        bindings.NetworkGraph_channel_failed(this.ptr, short_channel_id, is_permanent);
    }
    /**
     * Marks a node in the graph as failed.
     */
    node_failed(_node_id, is_permanent) {
        bindings.NetworkGraph_node_failed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(_node_id, 33)), is_permanent);
    }
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
    remove_stale_channels_with_time(current_time_unix) {
        bindings.NetworkGraph_remove_stale_channels_with_time(this.ptr, current_time_unix);
    }
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
    update_channel(msg) {
        const ret = bindings.NetworkGraph_update_channel(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * For an already known (from announcement) channel, update info about one of the directions
     * of the channel without verifying the associated signatures. Because we aren't given the
     * associated signatures here we cannot relay the channel update to any of our peers.
     *
     * If built with `no-std`, any updates with a timestamp more than two weeks in the past or
     * materially in the future will be rejected.
     */
    update_channel_unsigned(msg) {
        const ret = bindings.NetworkGraph_update_channel_unsigned(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NetworkGraph.mjs.map