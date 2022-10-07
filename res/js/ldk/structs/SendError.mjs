import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Errors that may occur when [sending an onion message].
 *
 * [sending an onion message]: OnionMessenger::send_onion_message
 */
export class SendError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.SendError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKSendError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new SendError_Secp256k1(ptr);
            case 1: return new SendError_TooBigPacket(ptr);
            case 2: return new SendError_TooFewBlindedHops(ptr);
            case 3: return new SendError_InvalidFirstHop(ptr);
            case 4: return new SendError_BufferFull(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.SendError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the SendError
     */
    clone() {
        const ret = bindings.SendError_clone(this.ptr);
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Secp256k1-variant SendError
     */
    static constructor_secp256k1(a) {
        const ret = bindings.SendError_secp256k1(a);
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new TooBigPacket-variant SendError
     */
    static constructor_too_big_packet() {
        const ret = bindings.SendError_too_big_packet();
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new TooFewBlindedHops-variant SendError
     */
    static constructor_too_few_blinded_hops() {
        const ret = bindings.SendError_too_few_blinded_hops();
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidFirstHop-variant SendError
     */
    static constructor_invalid_first_hop() {
        const ret = bindings.SendError_invalid_first_hop();
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new BufferFull-variant SendError
     */
    static constructor_buffer_full() {
        const ret = bindings.SendError_buffer_full();
        const ret_hu_conv = SendError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
/** A SendError of type Secp256k1 */
export class SendError_Secp256k1 extends SendError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.secp256k1 = bindings.LDKSendError_Secp256k1_get_secp256k1(ptr);
    }
}
/** A SendError of type TooBigPacket */
export class SendError_TooBigPacket extends SendError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A SendError of type TooFewBlindedHops */
export class SendError_TooFewBlindedHops extends SendError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A SendError of type InvalidFirstHop */
export class SendError_InvalidFirstHop extends SendError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A SendError of type BufferFull */
export class SendError_BufferFull extends SendError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=SendError.mjs.map