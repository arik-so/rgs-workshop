import { Currency } from '../enums/Currency.mjs';
import { RouteHint } from '../structs/RouteHint.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { Result_InvoiceParseOrSemanticErrorZ } from '../structs/Result_InvoiceParseOrSemanticErrorZ.mjs';
import { SignedRawInvoice } from '../structs/SignedRawInvoice.mjs';
import { PrivateRoute } from '../structs/PrivateRoute.mjs';
import { Result_NoneSemanticErrorZ } from '../structs/Result_NoneSemanticErrorZ.mjs';
import { Result_InvoiceSemanticErrorZ } from '../structs/Result_InvoiceSemanticErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Represents a syntactically and semantically correct lightning BOLT11 invoice.
 *
 * There are three ways to construct an `Invoice`:
 * 1. using `InvoiceBuilder`
 * 2. using `Invoice::from_signed(SignedRawInvoice)`
 * 3. using `str::parse::<Invoice>(&str)`
 */
export declare class Invoice extends CommonBase {
    /**
     * Checks if two Invoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: Invoice): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Invoice
     */
    clone(): Invoice;
    /**
     * Checks if two Invoices contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Transform the `Invoice` into it's unchecked version
     */
    into_signed_raw(): SignedRawInvoice;
    /**
     * Check that the invoice is signed correctly and that key recovery works
     */
    check_signature(): Result_NoneSemanticErrorZ;
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
    static constructor_from_signed(signed_invoice: SignedRawInvoice): Result_InvoiceSemanticErrorZ;
    /**
     * Returns the `Invoice`'s timestamp as a duration since the Unix epoch
     */
    duration_since_epoch(): bigint;
    /**
     * Returns the hash to which we will receive the preimage on completion of the payment
     */
    payment_hash(): Uint8Array;
    /**
     * Get the payee's public key if one was included in the invoice
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payee_pub_key(): Uint8Array;
    /**
     * Get the payment secret if one was included in the invoice
     */
    payment_secret(): Uint8Array;
    /**
     * Get the invoice features if they were included in the invoice
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    features(): InvoiceFeatures;
    /**
     * Recover the payee's public key (only to be used if none was included in the invoice)
     */
    recover_payee_pub_key(): Uint8Array;
    /**
     * Returns the invoice's expiry time, if present, otherwise [`DEFAULT_EXPIRY_TIME`].
     */
    expiry_time(): bigint;
    /**
     * Returns whether the expiry time would pass at the given point in time.
     * `at_time` is the timestamp as a duration since the Unix epoch.
     */
    would_expire(at_time: bigint): boolean;
    /**
     * Returns the invoice's `min_final_cltv_expiry` time, if present, otherwise
     * [`DEFAULT_MIN_FINAL_CLTV_EXPIRY`].
     */
    min_final_cltv_expiry(): bigint;
    /**
     * Returns a list of all routes included in the invoice
     */
    private_routes(): PrivateRoute[];
    /**
     * Returns a list of all routes included in the invoice as the underlying hints
     */
    route_hints(): RouteHint[];
    /**
     * Returns the currency for which the invoice was issued
     */
    currency(): Currency;
    /**
     * Returns the amount if specified in the invoice as millisatoshis.
     */
    amount_milli_satoshis(): Option_u64Z;
    /**
     * Read a Invoice object from a string
     */
    static constructor_from_str(s: string): Result_InvoiceParseOrSemanticErrorZ;
    /**
     * Get the string representation of a Invoice object
     */
    to_str(): string;
}
