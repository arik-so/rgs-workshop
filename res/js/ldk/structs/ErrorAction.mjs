import { ErrorMessage } from '../structs/ErrorMessage.mjs';
import { WarningMessage } from '../structs/WarningMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Used to put an error message in a LightningError
 */
export class ErrorAction extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.ErrorAction_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKErrorAction_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new ErrorAction_DisconnectPeer(ptr);
            case 1: return new ErrorAction_IgnoreError(ptr);
            case 2: return new ErrorAction_IgnoreAndLog(ptr);
            case 3: return new ErrorAction_IgnoreDuplicateGossip(ptr);
            case 4: return new ErrorAction_SendErrorMessage(ptr);
            case 5: return new ErrorAction_SendWarningMessage(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.ErrorAction_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ErrorAction
     */
    clone() {
        const ret = bindings.ErrorAction_clone(this.ptr);
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DisconnectPeer-variant ErrorAction
     */
    static constructor_disconnect_peer(msg) {
        const ret = bindings.ErrorAction_disconnect_peer(msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, msg);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IgnoreError-variant ErrorAction
     */
    static constructor_ignore_error() {
        const ret = bindings.ErrorAction_ignore_error();
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IgnoreAndLog-variant ErrorAction
     */
    static constructor_ignore_and_log(a) {
        const ret = bindings.ErrorAction_ignore_and_log(a);
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IgnoreDuplicateGossip-variant ErrorAction
     */
    static constructor_ignore_duplicate_gossip() {
        const ret = bindings.ErrorAction_ignore_duplicate_gossip();
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SendErrorMessage-variant ErrorAction
     */
    static constructor_send_error_message(msg) {
        const ret = bindings.ErrorAction_send_error_message(msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, msg);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SendWarningMessage-variant ErrorAction
     */
    static constructor_send_warning_message(msg, log_level) {
        const ret = bindings.ErrorAction_send_warning_message(msg == null ? 0n : CommonBase.get_ptr_of(msg), log_level);
        const ret_hu_conv = ErrorAction.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, msg);
        return ret_hu_conv;
    }
}
/** A ErrorAction of type DisconnectPeer */
export class ErrorAction_DisconnectPeer extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const msg = bindings.LDKErrorAction_DisconnectPeer_get_msg(ptr);
        const msg_hu_conv = new ErrorMessage(null, msg);
        CommonBase.add_ref_from(msg_hu_conv, this);
        this.msg = msg_hu_conv;
    }
}
/** A ErrorAction of type IgnoreError */
export class ErrorAction_IgnoreError extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ErrorAction of type IgnoreAndLog */
export class ErrorAction_IgnoreAndLog extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.ignore_and_log = bindings.LDKErrorAction_IgnoreAndLog_get_ignore_and_log(ptr);
    }
}
/** A ErrorAction of type IgnoreDuplicateGossip */
export class ErrorAction_IgnoreDuplicateGossip extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ErrorAction of type SendErrorMessage */
export class ErrorAction_SendErrorMessage extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const msg = bindings.LDKErrorAction_SendErrorMessage_get_msg(ptr);
        const msg_hu_conv = new ErrorMessage(null, msg);
        CommonBase.add_ref_from(msg_hu_conv, this);
        this.msg = msg_hu_conv;
    }
}
/** A ErrorAction of type SendWarningMessage */
export class ErrorAction_SendWarningMessage extends ErrorAction {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const msg = bindings.LDKErrorAction_SendWarningMessage_get_msg(ptr);
        const msg_hu_conv = new WarningMessage(null, msg);
        CommonBase.add_ref_from(msg_hu_conv, this);
        this.msg = msg_hu_conv;
        this.log_level = bindings.LDKErrorAction_SendWarningMessage_get_log_level(ptr);
    }
}
//# sourceMappingURL=ErrorAction.mjs.map