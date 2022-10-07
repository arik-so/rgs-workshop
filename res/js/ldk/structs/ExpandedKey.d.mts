import { CommonBase } from './CommonBase.mjs';
/**
 * A set of keys that were HKDF-expanded from an initial call to
 * [`KeysInterface::get_inbound_payment_key_material`].
 *
 * [`KeysInterface::get_inbound_payment_key_material`]: crate::chain::keysinterface::KeysInterface::get_inbound_payment_key_material
 */
export declare class ExpandedKey extends CommonBase {
    /**
     * Create a  new [`ExpandedKey`] for generating an inbound payment hash and secret.
     *
     * It is recommended to cache this value and not regenerate it for each new inbound payment.
     */
    static constructor_new(key_material: Uint8Array): ExpandedKey;
}