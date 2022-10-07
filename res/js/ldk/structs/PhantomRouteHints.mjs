import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_PhantomRouteHintsDecodeErrorZ } from '../structs/Result_PhantomRouteHintsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Route hints used in constructing invoices for [phantom node payents].
 *
 * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
 */
export class PhantomRouteHints extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PhantomRouteHints_free);
    }
    /**
     * The list of channels to be included in the invoice route hints.
     */
    get_channels() {
        const ret = bindings.PhantomRouteHints_get_channels(this.ptr);
        const ret_conv_16_len = bindings.getArrayLength(ret);
        const ret_conv_16_arr = new Array(ret_conv_16_len).fill(null);
        for (var q = 0; q < ret_conv_16_len; q++) {
            const ret_conv_16 = bindings.getU64ArrayElem(ret, q);
            const ret_conv_16_hu_conv = new ChannelDetails(null, ret_conv_16);
            CommonBase.add_ref_from(ret_conv_16_hu_conv, this);
            ret_conv_16_arr[q] = ret_conv_16_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_16_arr;
    }
    /**
     * The list of channels to be included in the invoice route hints.
     */
    set_channels(val) {
        bindings.PhantomRouteHints_set_channels(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_16 => val_conv_16 == null ? 0n : CommonBase.get_ptr_of(val_conv_16)) : null));
        val.forEach((val_conv_16) => { CommonBase.add_ref_from(this, val_conv_16); });
    }
    /**
     * A fake scid used for representing the phantom node's fake channel in generating the invoice
     * route hints.
     */
    get_phantom_scid() {
        const ret = bindings.PhantomRouteHints_get_phantom_scid(this.ptr);
        return ret;
    }
    /**
     * A fake scid used for representing the phantom node's fake channel in generating the invoice
     * route hints.
     */
    set_phantom_scid(val) {
        bindings.PhantomRouteHints_set_phantom_scid(this.ptr, val);
    }
    /**
     * The pubkey of the real backing node that would ultimately receive the payment.
     */
    get_real_node_pubkey() {
        const ret = bindings.PhantomRouteHints_get_real_node_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The pubkey of the real backing node that would ultimately receive the payment.
     */
    set_real_node_pubkey(val) {
        bindings.PhantomRouteHints_set_real_node_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new PhantomRouteHints given each field
     */
    static constructor_new(channels_arg, phantom_scid_arg, real_node_pubkey_arg) {
        const ret = bindings.PhantomRouteHints_new(bindings.encodeUint64Array(channels_arg != null ? channels_arg.map(channels_arg_conv_16 => channels_arg_conv_16 == null ? 0n : CommonBase.get_ptr_of(channels_arg_conv_16)) : null), phantom_scid_arg, bindings.encodeUint8Array(bindings.check_arr_len(real_node_pubkey_arg, 33)));
        const ret_hu_conv = new PhantomRouteHints(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        channels_arg.forEach((channels_arg_conv_16) => { CommonBase.add_ref_from(ret_hu_conv, channels_arg_conv_16); });
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.PhantomRouteHints_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PhantomRouteHints
     */
    clone() {
        const ret = bindings.PhantomRouteHints_clone(this.ptr);
        const ret_hu_conv = new PhantomRouteHints(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the PhantomRouteHints object into a byte array which can be read by PhantomRouteHints_read
     */
    write() {
        const ret = bindings.PhantomRouteHints_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a PhantomRouteHints from a byte array, created by PhantomRouteHints_write
     */
    static constructor_read(ser) {
        const ret = bindings.PhantomRouteHints_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_PhantomRouteHintsDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=PhantomRouteHints.mjs.map