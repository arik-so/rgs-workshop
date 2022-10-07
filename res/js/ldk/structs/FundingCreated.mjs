import { Result_FundingCreatedDecodeErrorZ } from '../structs/Result_FundingCreatedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A funding_created message to be sent or received from a peer
 */
export class FundingCreated extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.FundingCreated_free);
    }
    /**
     * A temporary channel ID, until the funding is established
     */
    get_temporary_channel_id() {
        const ret = bindings.FundingCreated_get_temporary_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A temporary channel ID, until the funding is established
     */
    set_temporary_channel_id(val) {
        bindings.FundingCreated_set_temporary_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The funding transaction ID
     */
    get_funding_txid() {
        const ret = bindings.FundingCreated_get_funding_txid(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The funding transaction ID
     */
    set_funding_txid(val) {
        bindings.FundingCreated_set_funding_txid(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The specific output index funding this channel
     */
    get_funding_output_index() {
        const ret = bindings.FundingCreated_get_funding_output_index(this.ptr);
        return ret;
    }
    /**
     * The specific output index funding this channel
     */
    set_funding_output_index(val) {
        bindings.FundingCreated_set_funding_output_index(this.ptr, val);
    }
    /**
     * The signature of the channel initiator (funder) on the initial commitment transaction
     */
    get_signature() {
        const ret = bindings.FundingCreated_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The signature of the channel initiator (funder) on the initial commitment transaction
     */
    set_signature(val) {
        bindings.FundingCreated_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Constructs a new FundingCreated given each field
     */
    static constructor_new(temporary_channel_id_arg, funding_txid_arg, funding_output_index_arg, signature_arg) {
        const ret = bindings.FundingCreated_new(bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(funding_txid_arg, 32)), funding_output_index_arg, bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)));
        const ret_hu_conv = new FundingCreated(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.FundingCreated_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the FundingCreated
     */
    clone() {
        const ret = bindings.FundingCreated_clone(this.ptr);
        const ret_hu_conv = new FundingCreated(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the FundingCreated object into a byte array which can be read by FundingCreated_read
     */
    write() {
        const ret = bindings.FundingCreated_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a FundingCreated from a byte array, created by FundingCreated_write
     */
    static constructor_read(ser) {
        const ret = bindings.FundingCreated_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_FundingCreatedDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=FundingCreated.mjs.map