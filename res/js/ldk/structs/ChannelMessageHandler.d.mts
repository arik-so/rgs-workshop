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
import { MessageSendEventsProviderInterface } from '../structs/MessageSendEventsProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of ChannelMessageHandler */
export interface ChannelMessageHandlerInterface {
    /**Handle an incoming open_channel message from the given peer.
     */
    handle_open_channel(their_node_id: Uint8Array, their_features: InitFeatures, msg: OpenChannel): void;
    /**Handle an incoming accept_channel message from the given peer.
     */
    handle_accept_channel(their_node_id: Uint8Array, their_features: InitFeatures, msg: AcceptChannel): void;
    /**Handle an incoming funding_created message from the given peer.
     */
    handle_funding_created(their_node_id: Uint8Array, msg: FundingCreated): void;
    /**Handle an incoming funding_signed message from the given peer.
     */
    handle_funding_signed(their_node_id: Uint8Array, msg: FundingSigned): void;
    /**Handle an incoming channel_ready message from the given peer.
     */
    handle_channel_ready(their_node_id: Uint8Array, msg: ChannelReady): void;
    /**Handle an incoming shutdown message from the given peer.
     */
    handle_shutdown(their_node_id: Uint8Array, their_features: InitFeatures, msg: Shutdown): void;
    /**Handle an incoming closing_signed message from the given peer.
     */
    handle_closing_signed(their_node_id: Uint8Array, msg: ClosingSigned): void;
    /**Handle an incoming update_add_htlc message from the given peer.
     */
    handle_update_add_htlc(their_node_id: Uint8Array, msg: UpdateAddHTLC): void;
    /**Handle an incoming update_fulfill_htlc message from the given peer.
     */
    handle_update_fulfill_htlc(their_node_id: Uint8Array, msg: UpdateFulfillHTLC): void;
    /**Handle an incoming update_fail_htlc message from the given peer.
     */
    handle_update_fail_htlc(their_node_id: Uint8Array, msg: UpdateFailHTLC): void;
    /**Handle an incoming update_fail_malformed_htlc message from the given peer.
     */
    handle_update_fail_malformed_htlc(their_node_id: Uint8Array, msg: UpdateFailMalformedHTLC): void;
    /**Handle an incoming commitment_signed message from the given peer.
     */
    handle_commitment_signed(their_node_id: Uint8Array, msg: CommitmentSigned): void;
    /**Handle an incoming revoke_and_ack message from the given peer.
     */
    handle_revoke_and_ack(their_node_id: Uint8Array, msg: RevokeAndACK): void;
    /**Handle an incoming update_fee message from the given peer.
     */
    handle_update_fee(their_node_id: Uint8Array, msg: UpdateFee): void;
    /**Handle an incoming announcement_signatures message from the given peer.
     */
    handle_announcement_signatures(their_node_id: Uint8Array, msg: AnnouncementSignatures): void;
    /**Indicates a connection to the peer failed/an existing connection was lost. If no connection
     * is believed to be possible in the future (eg they're sending us messages we don't
     * understand or indicate they require unknown feature bits), no_connection_possible is set
     * and any outstanding channels should be failed.
     */
    peer_disconnected(their_node_id: Uint8Array, no_connection_possible: boolean): void;
    /**Handle a peer reconnecting, possibly generating channel_reestablish message(s).
     */
    peer_connected(their_node_id: Uint8Array, msg: Init): void;
    /**Handle an incoming channel_reestablish message from the given peer.
     */
    handle_channel_reestablish(their_node_id: Uint8Array, msg: ChannelReestablish): void;
    /**Handle an incoming channel update from the given peer.
     */
    handle_channel_update(their_node_id: Uint8Array, msg: ChannelUpdate): void;
    /**Handle an incoming error message from the given peer.
     */
    handle_error(their_node_id: Uint8Array, msg: ErrorMessage): void;
    /**Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
}
/**
 * A trait to describe an object which can receive channel messages.
 *
 * Messages MAY be called in parallel when they originate from different their_node_ids, however
 * they MUST NOT be called in parallel when the two calls have the same their_node_id.
 */
export declare class ChannelMessageHandler extends CommonBase {
    /** Creates a new instance of ChannelMessageHandler from a given implementation */
    static new_impl(arg: ChannelMessageHandlerInterface, messageSendEventsProvider_impl: MessageSendEventsProviderInterface): ChannelMessageHandler;
    /**
     * Handle an incoming open_channel message from the given peer.
     */
    handle_open_channel(their_node_id: Uint8Array, their_features: InitFeatures, msg: OpenChannel): void;
    /**
     * Handle an incoming accept_channel message from the given peer.
     */
    handle_accept_channel(their_node_id: Uint8Array, their_features: InitFeatures, msg: AcceptChannel): void;
    /**
     * Handle an incoming funding_created message from the given peer.
     */
    handle_funding_created(their_node_id: Uint8Array, msg: FundingCreated): void;
    /**
     * Handle an incoming funding_signed message from the given peer.
     */
    handle_funding_signed(their_node_id: Uint8Array, msg: FundingSigned): void;
    /**
     * Handle an incoming channel_ready message from the given peer.
     */
    handle_channel_ready(their_node_id: Uint8Array, msg: ChannelReady): void;
    /**
     * Handle an incoming shutdown message from the given peer.
     */
    handle_shutdown(their_node_id: Uint8Array, their_features: InitFeatures, msg: Shutdown): void;
    /**
     * Handle an incoming closing_signed message from the given peer.
     */
    handle_closing_signed(their_node_id: Uint8Array, msg: ClosingSigned): void;
    /**
     * Handle an incoming update_add_htlc message from the given peer.
     */
    handle_update_add_htlc(their_node_id: Uint8Array, msg: UpdateAddHTLC): void;
    /**
     * Handle an incoming update_fulfill_htlc message from the given peer.
     */
    handle_update_fulfill_htlc(their_node_id: Uint8Array, msg: UpdateFulfillHTLC): void;
    /**
     * Handle an incoming update_fail_htlc message from the given peer.
     */
    handle_update_fail_htlc(their_node_id: Uint8Array, msg: UpdateFailHTLC): void;
    /**
     * Handle an incoming update_fail_malformed_htlc message from the given peer.
     */
    handle_update_fail_malformed_htlc(their_node_id: Uint8Array, msg: UpdateFailMalformedHTLC): void;
    /**
     * Handle an incoming commitment_signed message from the given peer.
     */
    handle_commitment_signed(their_node_id: Uint8Array, msg: CommitmentSigned): void;
    /**
     * Handle an incoming revoke_and_ack message from the given peer.
     */
    handle_revoke_and_ack(their_node_id: Uint8Array, msg: RevokeAndACK): void;
    /**
     * Handle an incoming update_fee message from the given peer.
     */
    handle_update_fee(their_node_id: Uint8Array, msg: UpdateFee): void;
    /**
     * Handle an incoming announcement_signatures message from the given peer.
     */
    handle_announcement_signatures(their_node_id: Uint8Array, msg: AnnouncementSignatures): void;
    /**
     * Indicates a connection to the peer failed/an existing connection was lost. If no connection
     * is believed to be possible in the future (eg they're sending us messages we don't
     * understand or indicate they require unknown feature bits), no_connection_possible is set
     * and any outstanding channels should be failed.
     */
    peer_disconnected(their_node_id: Uint8Array, no_connection_possible: boolean): void;
    /**
     * Handle a peer reconnecting, possibly generating channel_reestablish message(s).
     */
    peer_connected(their_node_id: Uint8Array, msg: Init): void;
    /**
     * Handle an incoming channel_reestablish message from the given peer.
     */
    handle_channel_reestablish(their_node_id: Uint8Array, msg: ChannelReestablish): void;
    /**
     * Handle an incoming channel update from the given peer.
     */
    handle_channel_update(their_node_id: Uint8Array, msg: ChannelUpdate): void;
    /**
     * Handle an incoming error message from the given peer.
     */
    handle_error(their_node_id: Uint8Array, msg: ErrorMessage): void;
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**
     * Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
}
