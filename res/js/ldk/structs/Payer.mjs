import { Route } from '../structs/Route.mjs';
import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_PaymentIdPaymentSendFailureZ } from '../structs/Result_PaymentIdPaymentSendFailureZ.mjs';
import { Result_NonePaymentSendFailureZ } from '../structs/Result_NonePaymentSendFailureZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKPayerHolder {
}
/**
 * A trait defining behavior of an [`Invoice`] payer.
 */
export class Payer extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Payer_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Payer from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKPayerHolder();
        let structImplementation = {
            node_id() {
                const ret = arg.node_id();
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 33));
                return result;
            },
            first_hops() {
                const ret = arg.first_hops();
                const result = bindings.encodeUint64Array(ret != null ? ret.map(ret_conv_16 => ret_conv_16 == null ? 0n : ret_conv_16.clone_ptr()) : null);
                return result;
            },
            send_payment(route, payment_hash, payment_secret) {
                const route_hu_conv = new Route(null, route);
                const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
                const payment_secret_conv = bindings.decodeUint8Array(payment_secret);
                const ret = arg.send_payment(route_hu_conv, payment_hash_conv, payment_secret_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            send_spontaneous_payment(route, payment_preimage) {
                const route_hu_conv = new Route(null, route);
                const payment_preimage_conv = bindings.decodeUint8Array(payment_preimage);
                const ret = arg.send_spontaneous_payment(route_hu_conv, payment_preimage_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            retry_payment(route, payment_id) {
                const route_hu_conv = new Route(null, route);
                const payment_id_conv = bindings.decodeUint8Array(payment_id);
                const ret = arg.retry_payment(route_hu_conv, payment_id_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            abandon_payment(payment_id) {
                const payment_id_conv = bindings.decodeUint8Array(payment_id);
                arg.abandon_payment(payment_id_conv);
            },
        };
        const ptr_idx = bindings.LDKPayer_new(structImplementation);
        impl_holder.held = new Payer(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Returns the payer's node id.
     */
    node_id() {
        const ret = bindings.Payer_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Returns the payer's channels.
     */
    first_hops() {
        const ret = bindings.Payer_first_hops(this.ptr);
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
     * Sends a payment over the Lightning Network using the given [`Route`].
     *
     * Note that payment_secret (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_payment(route, payment_hash, payment_secret) {
        const ret = bindings.Payer_send_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_secret, 32)));
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Sends a spontaneous payment over the Lightning Network using the given [`Route`].
     */
    send_spontaneous_payment(route, payment_preimage) {
        const ret = bindings.Payer_send_spontaneous_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)));
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Retries a failed payment path for the [`PaymentId`] using the given [`Route`].
     */
    retry_payment(route, payment_id) {
        const ret = bindings.Payer_retry_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)));
        const ret_hu_conv = Result_NonePaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Signals that no further retries for the given payment will occur.
     */
    abandon_payment(payment_id) {
        bindings.Payer_abandon_payment(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)));
    }
}
//# sourceMappingURL=Payer.mjs.map