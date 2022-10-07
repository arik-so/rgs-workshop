import { Level } from '../enums/Level.mjs';
import { ErrorMessage } from '../structs/ErrorMessage.mjs';
import { WarningMessage } from '../structs/WarningMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Used to put an error message in a LightningError
 */
export declare class ErrorAction extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ErrorAction
     */
    clone(): ErrorAction;
    /**
     * Utility method to constructs a new DisconnectPeer-variant ErrorAction
     */
    static constructor_disconnect_peer(msg: ErrorMessage): ErrorAction;
    /**
     * Utility method to constructs a new IgnoreError-variant ErrorAction
     */
    static constructor_ignore_error(): ErrorAction;
    /**
     * Utility method to constructs a new IgnoreAndLog-variant ErrorAction
     */
    static constructor_ignore_and_log(a: Level): ErrorAction;
    /**
     * Utility method to constructs a new IgnoreDuplicateGossip-variant ErrorAction
     */
    static constructor_ignore_duplicate_gossip(): ErrorAction;
    /**
     * Utility method to constructs a new SendErrorMessage-variant ErrorAction
     */
    static constructor_send_error_message(msg: ErrorMessage): ErrorAction;
    /**
     * Utility method to constructs a new SendWarningMessage-variant ErrorAction
     */
    static constructor_send_warning_message(msg: WarningMessage, log_level: Level): ErrorAction;
}
/** A ErrorAction of type DisconnectPeer */
export declare class ErrorAction_DisconnectPeer extends ErrorAction {
    /**
     * An error message which we should make an effort to send before we disconnect.
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    msg: ErrorMessage;
}
/** A ErrorAction of type IgnoreError */
export declare class ErrorAction_IgnoreError extends ErrorAction {
}
/** A ErrorAction of type IgnoreAndLog */
export declare class ErrorAction_IgnoreAndLog extends ErrorAction {
    ignore_and_log: Level;
}
/** A ErrorAction of type IgnoreDuplicateGossip */
export declare class ErrorAction_IgnoreDuplicateGossip extends ErrorAction {
}
/** A ErrorAction of type SendErrorMessage */
export declare class ErrorAction_SendErrorMessage extends ErrorAction {
    /**
     * The message to send.
     */
    msg: ErrorMessage;
}
/** A ErrorAction of type SendWarningMessage */
export declare class ErrorAction_SendWarningMessage extends ErrorAction {
    /**
     * The message to send.
     */
    msg: WarningMessage;
    /**
     * The peer may have done something harmless that we weren't able to meaningfully process,
     * though we should still tell them about it.
     * If this event is logged, log it at the given level.
     */
    log_level: Level;
}
