import { Result_COption_TypeZDecodeErrorZ } from '../structs/Result_COption_TypeZDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKCustomMessageReaderHolder {
}
/**
 * Trait to be implemented by custom message (unrelated to the channel/gossip LN layers)
 * decoders.
 */
export class CustomMessageReader extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.CustomMessageReader_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of CustomMessageReader from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKCustomMessageReaderHolder();
        let structImplementation = {
            read(message_type, buffer) {
                const buffer_conv = bindings.decodeUint8Array(buffer);
                const ret = arg.read(message_type, buffer_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const ptr_idx = bindings.LDKCustomMessageReader_new(structImplementation);
        impl_holder.held = new CustomMessageReader(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Decodes a custom message to `CustomMessageType`. If the given message type is known to the
     * implementation and the message could be decoded, must return `Ok(Some(message))`. If the
     * message type is unknown to the implementation, must return `Ok(None)`. If a decoding error
     * occur, must return `Err(DecodeError::X)` where `X` details the encountered error.
     */
    read(message_type, buffer) {
        const ret = bindings.CustomMessageReader_read(this.ptr, message_type, bindings.encodeUint8Array(buffer));
        const ret_hu_conv = Result_COption_TypeZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=CustomMessageReader.mjs.map