import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { AcceptChannel } from '../structs/AcceptChannel.mjs';
import { OpenChannel } from '../structs/OpenChannel.mjs';
import { FundingCreated } from '../structs/FundingCreated.mjs';
import { FundingSigned } from '../structs/FundingSigned.mjs';
import { ChannelReady } from '../structs/ChannelReady.mjs';
import { AnnouncementSignatures } from '../structs/AnnouncementSignatures.mjs';
import { RevokeAndACK } from '../structs/RevokeAndACK.mjs';
import { ClosingSigned } from '../structs/ClosingSigned.mjs';
import { Shutdown } from '../structs/Shutdown.mjs';
import { ChannelReestablish } from '../structs/ChannelReestablish.mjs';
import { ErrorMessage } from '../structs/ErrorMessage.mjs';
import { InitFeatures } from '../structs/InitFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { UpdateAddHTLC } from '../structs/UpdateAddHTLC.mjs';
import { UpdateFulfillHTLC } from '../structs/UpdateFulfillHTLC.mjs';
import { UpdateFailHTLC } from '../structs/UpdateFailHTLC.mjs';
import { UpdateFailMalformedHTLC } from '../structs/UpdateFailMalformedHTLC.mjs';
import { CommitmentSigned } from '../structs/CommitmentSigned.mjs';
import { Init } from '../structs/Init.mjs';
import { UpdateFee } from '../structs/UpdateFee.mjs';
import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKChannelMessageHandlerHolder {
}
/**
 * A trait to describe an object which can receive channel messages.
 *
 * Messages MAY be called in parallel when they originate from different their_node_ids, however
 * they MUST NOT be called in parallel when the two calls have the same their_node_id.
 */
export class ChannelMessageHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelMessageHandler_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of ChannelMessageHandler from a given implementation */
    static new_impl(arg, messageSendEventsProvider_impl) {
        const impl_holder = new LDKChannelMessageHandlerHolder();
        let structImplementation = {
            handle_open_channel(their_node_id, their_features, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const their_features_hu_conv = new InitFeatures(null, their_features);
                CommonBase.add_ref_from(their_features_hu_conv, this);
                const msg_hu_conv = new OpenChannel(null, msg);
                arg.handle_open_channel(their_node_id_conv, their_features_hu_conv, msg_hu_conv);
            },
            handle_accept_channel(their_node_id, their_features, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const their_features_hu_conv = new InitFeatures(null, their_features);
                CommonBase.add_ref_from(their_features_hu_conv, this);
                const msg_hu_conv = new AcceptChannel(null, msg);
                arg.handle_accept_channel(their_node_id_conv, their_features_hu_conv, msg_hu_conv);
            },
            handle_funding_created(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new FundingCreated(null, msg);
                arg.handle_funding_created(their_node_id_conv, msg_hu_conv);
            },
            handle_funding_signed(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new FundingSigned(null, msg);
                arg.handle_funding_signed(their_node_id_conv, msg_hu_conv);
            },
            handle_channel_ready(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ChannelReady(null, msg);
                arg.handle_channel_ready(their_node_id_conv, msg_hu_conv);
            },
            handle_shutdown(their_node_id, their_features, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const their_features_hu_conv = new InitFeatures(null, their_features);
                const msg_hu_conv = new Shutdown(null, msg);
                arg.handle_shutdown(their_node_id_conv, their_features_hu_conv, msg_hu_conv);
            },
            handle_closing_signed(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ClosingSigned(null, msg);
                arg.handle_closing_signed(their_node_id_conv, msg_hu_conv);
            },
            handle_update_add_htlc(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new UpdateAddHTLC(null, msg);
                arg.handle_update_add_htlc(their_node_id_conv, msg_hu_conv);
            },
            handle_update_fulfill_htlc(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new UpdateFulfillHTLC(null, msg);
                arg.handle_update_fulfill_htlc(their_node_id_conv, msg_hu_conv);
            },
            handle_update_fail_htlc(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new UpdateFailHTLC(null, msg);
                arg.handle_update_fail_htlc(their_node_id_conv, msg_hu_conv);
            },
            handle_update_fail_malformed_htlc(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new UpdateFailMalformedHTLC(null, msg);
                arg.handle_update_fail_malformed_htlc(their_node_id_conv, msg_hu_conv);
            },
            handle_commitment_signed(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new CommitmentSigned(null, msg);
                arg.handle_commitment_signed(their_node_id_conv, msg_hu_conv);
            },
            handle_revoke_and_ack(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new RevokeAndACK(null, msg);
                arg.handle_revoke_and_ack(their_node_id_conv, msg_hu_conv);
            },
            handle_update_fee(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new UpdateFee(null, msg);
                arg.handle_update_fee(their_node_id_conv, msg_hu_conv);
            },
            handle_announcement_signatures(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new AnnouncementSignatures(null, msg);
                arg.handle_announcement_signatures(their_node_id_conv, msg_hu_conv);
            },
            peer_disconnected(their_node_id, no_connection_possible) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                arg.peer_disconnected(their_node_id_conv, no_connection_possible);
            },
            peer_connected(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new Init(null, msg);
                arg.peer_connected(their_node_id_conv, msg_hu_conv);
            },
            handle_channel_reestablish(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ChannelReestablish(null, msg);
                arg.handle_channel_reestablish(their_node_id_conv, msg_hu_conv);
            },
            handle_channel_update(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ChannelUpdate(null, msg);
                arg.handle_channel_update(their_node_id_conv, msg_hu_conv);
            },
            handle_error(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ErrorMessage(null, msg);
                arg.handle_error(their_node_id_conv, msg_hu_conv);
            },
            provided_node_features() {
                const ret = arg.provided_node_features();
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            provided_init_features(their_node_id) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const ret = arg.provided_init_features(their_node_id_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const messageSendEventsProvider = MessageSendEventsProvider.new_impl(messageSendEventsProvider_impl);
        const ptr_idx = bindings.LDKChannelMessageHandler_new(structImplementation, messageSendEventsProvider.instance_idx);
        impl_holder.held = new ChannelMessageHandler(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        impl_holder.held.ptrs_to.push(messageSendEventsProvider);
        return impl_holder.held;
    }
    /**
     * Handle an incoming open_channel message from the given peer.
     */
    handle_open_channel(their_node_id, their_features, msg) {
        bindings.ChannelMessageHandler_handle_open_channel(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), their_features == null ? 0n : CommonBase.get_ptr_of(their_features), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, their_features);
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming accept_channel message from the given peer.
     */
    handle_accept_channel(their_node_id, their_features, msg) {
        bindings.ChannelMessageHandler_handle_accept_channel(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), their_features == null ? 0n : CommonBase.get_ptr_of(their_features), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, their_features);
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming funding_created message from the given peer.
     */
    handle_funding_created(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_funding_created(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming funding_signed message from the given peer.
     */
    handle_funding_signed(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_funding_signed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming channel_ready message from the given peer.
     */
    handle_channel_ready(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_channel_ready(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming shutdown message from the given peer.
     */
    handle_shutdown(their_node_id, their_features, msg) {
        bindings.ChannelMessageHandler_handle_shutdown(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), their_features == null ? 0n : CommonBase.get_ptr_of(their_features), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, their_features);
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming closing_signed message from the given peer.
     */
    handle_closing_signed(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_closing_signed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming update_add_htlc message from the given peer.
     */
    handle_update_add_htlc(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_update_add_htlc(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming update_fulfill_htlc message from the given peer.
     */
    handle_update_fulfill_htlc(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_update_fulfill_htlc(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming update_fail_htlc message from the given peer.
     */
    handle_update_fail_htlc(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_update_fail_htlc(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming update_fail_malformed_htlc message from the given peer.
     */
    handle_update_fail_malformed_htlc(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_update_fail_malformed_htlc(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming commitment_signed message from the given peer.
     */
    handle_commitment_signed(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_commitment_signed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming revoke_and_ack message from the given peer.
     */
    handle_revoke_and_ack(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_revoke_and_ack(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming update_fee message from the given peer.
     */
    handle_update_fee(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_update_fee(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming announcement_signatures message from the given peer.
     */
    handle_announcement_signatures(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_announcement_signatures(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Indicates a connection to the peer failed/an existing connection was lost. If no connection
     * is believed to be possible in the future (eg they're sending us messages we don't
     * understand or indicate they require unknown feature bits), no_connection_possible is set
     * and any outstanding channels should be failed.
     */
    peer_disconnected(their_node_id, no_connection_possible) {
        bindings.ChannelMessageHandler_peer_disconnected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), no_connection_possible);
    }
    /**
     * Handle a peer reconnecting, possibly generating channel_reestablish message(s).
     */
    peer_connected(their_node_id, msg) {
        bindings.ChannelMessageHandler_peer_connected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming channel_reestablish message from the given peer.
     */
    handle_channel_reestablish(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_channel_reestablish(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming channel update from the given peer.
     */
    handle_channel_update(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_channel_update(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Handle an incoming error message from the given peer.
     */
    handle_error(their_node_id, msg) {
        bindings.ChannelMessageHandler_handle_error(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features() {
        const ret = bindings.ChannelMessageHandler_provided_node_features(this.ptr);
        const ret_hu_conv = new NodeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id) {
        const ret = bindings.ChannelMessageHandler_provided_init_features(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)));
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelMessageHandler.mjs.map