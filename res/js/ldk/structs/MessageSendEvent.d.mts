import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { AcceptChannel } from '../structs/AcceptChannel.mjs';
import { OpenChannel } from '../structs/OpenChannel.mjs';
import { FundingCreated } from '../structs/FundingCreated.mjs';
import { FundingSigned } from '../structs/FundingSigned.mjs';
import { ChannelReady } from '../structs/ChannelReady.mjs';
import { AnnouncementSignatures } from '../structs/AnnouncementSignatures.mjs';
import { CommitmentUpdate } from '../structs/CommitmentUpdate.mjs';
import { RevokeAndACK } from '../structs/RevokeAndACK.mjs';
import { ClosingSigned } from '../structs/ClosingSigned.mjs';
import { Shutdown } from '../structs/Shutdown.mjs';
import { ChannelReestablish } from '../structs/ChannelReestablish.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { ErrorAction } from '../structs/ErrorAction.mjs';
import { QueryChannelRange } from '../structs/QueryChannelRange.mjs';
import { QueryShortChannelIds } from '../structs/QueryShortChannelIds.mjs';
import { ReplyChannelRange } from '../structs/ReplyChannelRange.mjs';
import { GossipTimestampFilter } from '../structs/GossipTimestampFilter.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An event generated by ChannelManager which indicates a message should be sent to a peer (or
 * broadcast to most peers).
 * These events are handled by PeerManager::process_events if you are using a PeerManager.
 */
export declare class MessageSendEvent extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the MessageSendEvent
     */
    clone(): MessageSendEvent;
    /**
     * Utility method to constructs a new SendAcceptChannel-variant MessageSendEvent
     */
    static constructor_send_accept_channel(node_id: Uint8Array, msg: AcceptChannel): MessageSendEvent;
    /**
     * Utility method to constructs a new SendOpenChannel-variant MessageSendEvent
     */
    static constructor_send_open_channel(node_id: Uint8Array, msg: OpenChannel): MessageSendEvent;
    /**
     * Utility method to constructs a new SendFundingCreated-variant MessageSendEvent
     */
    static constructor_send_funding_created(node_id: Uint8Array, msg: FundingCreated): MessageSendEvent;
    /**
     * Utility method to constructs a new SendFundingSigned-variant MessageSendEvent
     */
    static constructor_send_funding_signed(node_id: Uint8Array, msg: FundingSigned): MessageSendEvent;
    /**
     * Utility method to constructs a new SendChannelReady-variant MessageSendEvent
     */
    static constructor_send_channel_ready(node_id: Uint8Array, msg: ChannelReady): MessageSendEvent;
    /**
     * Utility method to constructs a new SendAnnouncementSignatures-variant MessageSendEvent
     */
    static constructor_send_announcement_signatures(node_id: Uint8Array, msg: AnnouncementSignatures): MessageSendEvent;
    /**
     * Utility method to constructs a new UpdateHTLCs-variant MessageSendEvent
     */
    static constructor_update_htlcs(node_id: Uint8Array, updates: CommitmentUpdate): MessageSendEvent;
    /**
     * Utility method to constructs a new SendRevokeAndACK-variant MessageSendEvent
     */
    static constructor_send_revoke_and_ack(node_id: Uint8Array, msg: RevokeAndACK): MessageSendEvent;
    /**
     * Utility method to constructs a new SendClosingSigned-variant MessageSendEvent
     */
    static constructor_send_closing_signed(node_id: Uint8Array, msg: ClosingSigned): MessageSendEvent;
    /**
     * Utility method to constructs a new SendShutdown-variant MessageSendEvent
     */
    static constructor_send_shutdown(node_id: Uint8Array, msg: Shutdown): MessageSendEvent;
    /**
     * Utility method to constructs a new SendChannelReestablish-variant MessageSendEvent
     */
    static constructor_send_channel_reestablish(node_id: Uint8Array, msg: ChannelReestablish): MessageSendEvent;
    /**
     * Utility method to constructs a new SendChannelAnnouncement-variant MessageSendEvent
     */
    static constructor_send_channel_announcement(node_id: Uint8Array, msg: ChannelAnnouncement, update_msg: ChannelUpdate): MessageSendEvent;
    /**
     * Utility method to constructs a new BroadcastChannelAnnouncement-variant MessageSendEvent
     */
    static constructor_broadcast_channel_announcement(msg: ChannelAnnouncement, update_msg: ChannelUpdate): MessageSendEvent;
    /**
     * Utility method to constructs a new BroadcastChannelUpdate-variant MessageSendEvent
     */
    static constructor_broadcast_channel_update(msg: ChannelUpdate): MessageSendEvent;
    /**
     * Utility method to constructs a new SendChannelUpdate-variant MessageSendEvent
     */
    static constructor_send_channel_update(node_id: Uint8Array, msg: ChannelUpdate): MessageSendEvent;
    /**
     * Utility method to constructs a new HandleError-variant MessageSendEvent
     */
    static constructor_handle_error(node_id: Uint8Array, action: ErrorAction): MessageSendEvent;
    /**
     * Utility method to constructs a new SendChannelRangeQuery-variant MessageSendEvent
     */
    static constructor_send_channel_range_query(node_id: Uint8Array, msg: QueryChannelRange): MessageSendEvent;
    /**
     * Utility method to constructs a new SendShortIdsQuery-variant MessageSendEvent
     */
    static constructor_send_short_ids_query(node_id: Uint8Array, msg: QueryShortChannelIds): MessageSendEvent;
    /**
     * Utility method to constructs a new SendReplyChannelRange-variant MessageSendEvent
     */
    static constructor_send_reply_channel_range(node_id: Uint8Array, msg: ReplyChannelRange): MessageSendEvent;
    /**
     * Utility method to constructs a new SendGossipTimestampFilter-variant MessageSendEvent
     */
    static constructor_send_gossip_timestamp_filter(node_id: Uint8Array, msg: GossipTimestampFilter): MessageSendEvent;
}
/** A MessageSendEvent of type SendAcceptChannel */
export declare class MessageSendEvent_SendAcceptChannel extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: AcceptChannel;
}
/** A MessageSendEvent of type SendOpenChannel */
export declare class MessageSendEvent_SendOpenChannel extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: OpenChannel;
}
/** A MessageSendEvent of type SendFundingCreated */
export declare class MessageSendEvent_SendFundingCreated extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: FundingCreated;
}
/** A MessageSendEvent of type SendFundingSigned */
export declare class MessageSendEvent_SendFundingSigned extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: FundingSigned;
}
/** A MessageSendEvent of type SendChannelReady */
export declare class MessageSendEvent_SendChannelReady extends MessageSendEvent {
    /**
     * The node_id of the node which should receive these message(s)
     */
    node_id: Uint8Array;
    /**
     * The channel_ready message which should be sent.
     */
    msg: ChannelReady;
}
/** A MessageSendEvent of type SendAnnouncementSignatures */
export declare class MessageSendEvent_SendAnnouncementSignatures extends MessageSendEvent {
    /**
     * The node_id of the node which should receive these message(s)
     */
    node_id: Uint8Array;
    /**
     * The announcement_signatures message which should be sent.
     */
    msg: AnnouncementSignatures;
}
/** A MessageSendEvent of type UpdateHTLCs */
export declare class MessageSendEvent_UpdateHTLCs extends MessageSendEvent {
    /**
     * The node_id of the node which should receive these message(s)
     */
    node_id: Uint8Array;
    /**
     * The update messages which should be sent. ALL messages in the struct should be sent!
     */
    updates: CommitmentUpdate;
}
/** A MessageSendEvent of type SendRevokeAndACK */
export declare class MessageSendEvent_SendRevokeAndACK extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: RevokeAndACK;
}
/** A MessageSendEvent of type SendClosingSigned */
export declare class MessageSendEvent_SendClosingSigned extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: ClosingSigned;
}
/** A MessageSendEvent of type SendShutdown */
export declare class MessageSendEvent_SendShutdown extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: Shutdown;
}
/** A MessageSendEvent of type SendChannelReestablish */
export declare class MessageSendEvent_SendChannelReestablish extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The message which should be sent.
     */
    msg: ChannelReestablish;
}
/** A MessageSendEvent of type SendChannelAnnouncement */
export declare class MessageSendEvent_SendChannelAnnouncement extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The channel_announcement which should be sent.
     */
    msg: ChannelAnnouncement;
    /**
     * The followup channel_update which should be sent.
     */
    update_msg: ChannelUpdate;
}
/** A MessageSendEvent of type BroadcastChannelAnnouncement */
export declare class MessageSendEvent_BroadcastChannelAnnouncement extends MessageSendEvent {
    /**
     * The channel_announcement which should be sent.
     */
    msg: ChannelAnnouncement;
    /**
     * The followup channel_update which should be sent.
     */
    update_msg: ChannelUpdate;
}
/** A MessageSendEvent of type BroadcastChannelUpdate */
export declare class MessageSendEvent_BroadcastChannelUpdate extends MessageSendEvent {
    /**
     * The channel_update which should be sent.
     */
    msg: ChannelUpdate;
}
/** A MessageSendEvent of type SendChannelUpdate */
export declare class MessageSendEvent_SendChannelUpdate extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The channel_update which should be sent.
     */
    msg: ChannelUpdate;
}
/** A MessageSendEvent of type HandleError */
export declare class MessageSendEvent_HandleError extends MessageSendEvent {
    /**
     * The node_id of the node which should receive this message
     */
    node_id: Uint8Array;
    /**
     * The action which should be taken.
     */
    action: ErrorAction;
}
/** A MessageSendEvent of type SendChannelRangeQuery */
export declare class MessageSendEvent_SendChannelRangeQuery extends MessageSendEvent {
    /**
     * The node_id of this message recipient
     */
    node_id: Uint8Array;
    /**
     * The query_channel_range which should be sent.
     */
    msg: QueryChannelRange;
}
/** A MessageSendEvent of type SendShortIdsQuery */
export declare class MessageSendEvent_SendShortIdsQuery extends MessageSendEvent {
    /**
     * The node_id of this message recipient
     */
    node_id: Uint8Array;
    /**
     * The query_short_channel_ids which should be sent.
     */
    msg: QueryShortChannelIds;
}
/** A MessageSendEvent of type SendReplyChannelRange */
export declare class MessageSendEvent_SendReplyChannelRange extends MessageSendEvent {
    /**
     * The node_id of this message recipient
     */
    node_id: Uint8Array;
    /**
     * The reply_channel_range which should be sent.
     */
    msg: ReplyChannelRange;
}
/** A MessageSendEvent of type SendGossipTimestampFilter */
export declare class MessageSendEvent_SendGossipTimestampFilter extends MessageSendEvent {
    /**
     * The node_id of this message recipient
     */
    node_id: Uint8Array;
    /**
     * The gossip_timestamp_filter which should be sent.
     */
    msg: GossipTimestampFilter;
}