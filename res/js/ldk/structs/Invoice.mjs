import { RouteHint } from '../structs/RouteHint.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { Result_InvoiceParseOrSemanticErrorZ } from '../structs/Result_InvoiceParseOrSemanticErrorZ.mjs';
import { SignedRawInvoice } from '../structs/SignedRawInvoice.mjs';
import { PrivateRoute } from '../structs/PrivateRoute.mjs';
import { Result_NoneSemanticErrorZ } from '../structs/Result_NoneSemanticErrorZ.mjs';
import { Result_InvoiceSemanticErrorZ } from '../structs/Result_InvoiceSemanticErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents a syntactically and semantically correct lightning BOLT11 invoice.
 *
 * There are three ways to construct an `Invoice`:
 * 1. using `InvoiceBuilder`
 * 2. using `Invoice::from_signed(SignedRawInvoice)`
 * 3. using `str::parse::<Invoice>(&str)`
 */
export class Invoice extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Invoice_free);
    }
    /**
     * Checks if two Invoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.Invoice_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.Invoice_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Invoice
     */
    clone() {
        const ret = bindings.Invoice_clone(this.ptr);
        const ret_hu_conv = new Invoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two Invoices contain equal inner contents.
     */
    hash() {
        const ret = bindings.Invoice_hash(this.ptr);
        return ret;
    }
    /**
     * Transform the `Invoice` into it's unchecked version
     */
    into_signed_raw() {
        const ret = bindings.Invoice_into_signed_raw(this.ptr);
        const ret_hu_conv = new SignedRawInvoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Check that the invoice is signed correctly and that key recovery works
     */
    check_signature() {
        const ret = bindings.Invoice_check_signature(this.ptr);
        const ret_hu_conv = Result_NoneSemanticErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Constructs an `Invoice` from a `SignedRawInvoice` by checking all its invariants.
     * ```
     * use lightning_invoice::*;
     *
     * let invoice = \"lnbc100p1psj9jhxdqud3jxktt5w46x7unfv9kz6mn0v3jsnp4q0d3p2sfluzdx45tqcs\\
     * h2pu5qc7lgq0xs578ngs6s0s68ua4h7cvspp5q6rmq35js88zp5dvwrv9m459tnk2zunwj5jalqtyxqulh0l\\
     * 5gflssp5nf55ny5gcrfl30xuhzj3nphgj27rstekmr9fw3ny5989s300gyus9qyysgqcqpcrzjqw2sxwe993\\
     * h5pcm4dxzpvttgza8zhkqxpgffcrf5v25nwpr3cmfg7z54kuqq8rgqqqqqqqq2qqqqq9qq9qrzjqd0ylaqcl\\
     * j9424x9m8h2vcukcgnm6s56xfgu3j78zyqzhgs4hlpzvznlugqq9vsqqqqqqqlgqqqqqeqq9qrzjqwldmj9d\\
     * ha74df76zhx6l9we0vjdquygcdt3kssupehe64g6yyp5yz5rhuqqwccqqyqqqqlgqqqqjcqq9qrzjqf9e58a\\
     * guqr0rcun0ajlvmzq3ek63cw2w282gv3z5uupmuwvgjtq2z55qsqqg6qqqyqqqrtnqqqzq3cqygrzjqvphms\\
     * ywntrrhqjcraumvc4y6r8v4z5v593trte429v4hredj7ms5z52usqq9ngqqqqqqqlgqqqqqqgq9qrzjq2v0v\\
     * p62g49p7569ev48cmulecsxe59lvaw3wlxm7r982zxa9zzj7z5l0cqqxusqqyqqqqlgqqqqqzsqygarl9fh3\\
     * 8s0gyuxjjgux34w75dnc6xp2l35j7es3jd4ugt3lu0xzre26yg5m7ke54n2d5sym4xcmxtl8238xxvw5h5h5\\
     * j5r6drg6k6zcqj0fcwg\";
     *
     * let signed = invoice.parse::<SignedRawInvoice>().unwrap();
     *
     * assert!(Invoice::from_signed(signed).is_ok());
     * ```
     */
    static constructor_from_signed(signed_invoice) {
        const ret = bindings.Invoice_from_signed(signed_invoice == null ? 0n : CommonBase.get_ptr_of(signed_invoice));
        const ret_hu_conv = Result_InvoiceSemanticErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, signed_invoice);
        return ret_hu_conv;
    }
    /**
     * Returns the `Invoice`'s timestamp as a duration since the Unix epoch
     */
    duration_since_epoch() {
        const ret = bindings.Invoice_duration_since_epoch(this.ptr);
        return ret;
    }
    /**
     * Returns the hash to which we will receive the preimage on completion of the payment
     */
    payment_hash() {
        const ret = bindings.Invoice_payment_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Get the payee's public key if one was included in the invoice
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payee_pub_key() {
        const ret = bindings.Invoice_payee_pub_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Get the payment secret if one was included in the invoice
     */
    payment_secret() {
        const ret = bindings.Invoice_payment_secret(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Get the invoice features if they were included in the invoice
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    features() {
        const ret = bindings.Invoice_features(this.ptr);
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Recover the payee's public key (only to be used if none was included in the invoice)
     */
    recover_payee_pub_key() {
        const ret = bindings.Invoice_recover_payee_pub_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Returns the invoice's expiry time, if present, otherwise [`DEFAULT_EXPIRY_TIME`].
     */
    expiry_time() {
        const ret = bindings.Invoice_expiry_time(this.ptr);
        return ret;
    }
    /**
     * Returns whether the expiry time would pass at the given point in time.
     * `at_time` is the timestamp as a duration since the Unix epoch.
     */
    would_expire(at_time) {
        const ret = bindings.Invoice_would_expire(this.ptr, at_time);
        return ret;
    }
    /**
     * Returns the invoice's `min_final_cltv_expiry` time, if present, otherwise
     * [`DEFAULT_MIN_FINAL_CLTV_EXPIRY`].
     */
    min_final_cltv_expiry() {
        const ret = bindings.Invoice_min_final_cltv_expiry(this.ptr);
        return ret;
    }
    /**
     * Returns a list of all routes included in the invoice
     */
    private_routes() {
        const ret = bindings.Invoice_private_routes(this.ptr);
        const ret_conv_14_len = bindings.getArrayLength(ret);
        const ret_conv_14_arr = new Array(ret_conv_14_len).fill(null);
        for (var o = 0; o < ret_conv_14_len; o++) {
            const ret_conv_14 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_14_hu_conv = new PrivateRoute(null, ret_conv_14);
            CommonBase.add_ref_from(ret_conv_14_hu_conv, this);
            ret_conv_14_arr[o] = ret_conv_14_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_14_arr;
    }
    /**
     * Returns a list of all routes included in the invoice as the underlying hints
     */
    route_hints() {
        const ret = bindings.Invoice_route_hints(this.ptr);
        const ret_conv_11_len = bindings.getArrayLength(ret);
        const ret_conv_11_arr = new Array(ret_conv_11_len).fill(null);
        for (var l = 0; l < ret_conv_11_len; l++) {
            const ret_conv_11 = bindings.getU64ArrayElem(ret, l);
            const ret_conv_11_hu_conv = new RouteHint(null, ret_conv_11);
            CommonBase.add_ref_from(ret_conv_11_hu_conv, this);
            ret_conv_11_arr[l] = ret_conv_11_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_11_arr;
    }
    /**
     * Returns the currency for which the invoice was issued
     */
    currency() {
        const ret = bindings.Invoice_currency(this.ptr);
        return ret;
    }
    /**
     * Returns the amount if specified in the invoice as millisatoshis.
     */
    amount_milli_satoshis() {
        const ret = bindings.Invoice_amount_milli_satoshis(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Read a Invoice object from a string
     */
    static constructor_from_str(s) {
        const ret = bindings.Invoice_from_str(bindings.encodeString(s));
        const ret_hu_conv = Result_InvoiceParseOrSemanticErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Get the string representation of a Invoice object
     */
    to_str() {
        const ret = bindings.Invoice_to_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=Invoice.mjs.map