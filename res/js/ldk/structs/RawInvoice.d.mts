import { Currency } from '../enums/Currency.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { PayeePubKey } from '../structs/PayeePubKey.mjs';
import { PrivateRoute } from '../structs/PrivateRoute.mjs';
import { Description } from '../structs/Description.mjs';
import { RawDataPart } from '../structs/RawDataPart.mjs';
import { Sha256 } from '../structs/Sha256.mjs';
import { ExpiryTime } from '../structs/ExpiryTime.mjs';
import { MinFinalCltvExpiry } from '../structs/MinFinalCltvExpiry.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Represents an syntactically correct Invoice for a payment on the lightning network,
 * but without the signature information.
 * De- and encoding should not lead to information loss but may lead to different hashes.
 *
 * For methods without docs see the corresponding methods in `Invoice`.
 */
export declare class RawInvoice extends CommonBase {
    /**
     * data part
     */
    get_data(): RawDataPart;
    /**
     * data part
     */
    set_data(val: RawDataPart): void;
    /**
     * Checks if two RawInvoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RawInvoice): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RawInvoice
     */
    clone(): RawInvoice;
    /**
     * Checks if two RawInvoices contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Calculate the hash of the encoded `RawInvoice` which should be signed.
     */
    signable_hash(): Uint8Array;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_hash(): Sha256;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    description(): Description;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payee_pub_key(): PayeePubKey;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    description_hash(): Sha256;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    expiry_time(): ExpiryTime;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    min_final_cltv_expiry(): MinFinalCltvExpiry;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_secret(): Uint8Array;
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    features(): InvoiceFeatures;
    private_routes(): PrivateRoute[];
    amount_pico_btc(): Option_u64Z;
    currency(): Currency;
}
