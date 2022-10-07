import { RouteHop } from '../structs/RouteHop.mjs';
import { RouteParameters } from '../structs/RouteParameters.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { PaymentPurpose } from '../structs/PaymentPurpose.mjs';
import { ClosureReason } from '../structs/ClosureReason.mjs';
import { HTLCDestination } from '../structs/HTLCDestination.mjs';
import { Option_NetworkUpdateZ } from '../structs/Option_NetworkUpdateZ.mjs';
import { SpendableOutputDescriptor } from '../structs/SpendableOutputDescriptor.mjs';
import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An Event which you should probably take some action in response to.
 *
 * Note that while Writeable and Readable are implemented for Event, you probably shouldn't use
 * them directly as they don't round-trip exactly (for example FundingGenerationReady is never
 * written as it makes no sense to respond to it after reconnecting to peers).
 */
export class Event extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.Event_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKEvent_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Event_FundingGenerationReady(ptr);
            case 1: return new Event_PaymentReceived(ptr);
            case 2: return new Event_PaymentClaimed(ptr);
            case 3: return new Event_PaymentSent(ptr);
            case 4: return new Event_PaymentFailed(ptr);
            case 5: return new Event_PaymentPathSuccessful(ptr);
            case 6: return new Event_PaymentPathFailed(ptr);
            case 7: return new Event_ProbeSuccessful(ptr);
            case 8: return new Event_ProbeFailed(ptr);
            case 9: return new Event_PendingHTLCsForwardable(ptr);
            case 10: return new Event_SpendableOutputs(ptr);
            case 11: return new Event_PaymentForwarded(ptr);
            case 12: return new Event_ChannelClosed(ptr);
            case 13: return new Event_DiscardFunding(ptr);
            case 14: return new Event_OpenChannelRequest(ptr);
            case 15: return new Event_HTLCHandlingFailed(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.Event_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Event
     */
    clone() {
        const ret = bindings.Event_clone(this.ptr);
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new FundingGenerationReady-variant Event
     */
    static constructor_funding_generation_ready(temporary_channel_id, counterparty_node_id, channel_value_satoshis, output_script, user_channel_id) {
        const ret = bindings.Event_funding_generation_ready(bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), channel_value_satoshis, bindings.encodeUint8Array(output_script), user_channel_id);
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentReceived-variant Event
     */
    static constructor_payment_received(payment_hash, amount_msat, purpose) {
        const ret = bindings.Event_payment_received(bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), amount_msat, CommonBase.get_ptr_of(purpose));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentClaimed-variant Event
     */
    static constructor_payment_claimed(payment_hash, amount_msat, purpose) {
        const ret = bindings.Event_payment_claimed(bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), amount_msat, CommonBase.get_ptr_of(purpose));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentSent-variant Event
     */
    static constructor_payment_sent(payment_id, payment_preimage, payment_hash, fee_paid_msat) {
        const ret = bindings.Event_payment_sent(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), CommonBase.get_ptr_of(fee_paid_msat));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentFailed-variant Event
     */
    static constructor_payment_failed(payment_id, payment_hash) {
        const ret = bindings.Event_payment_failed(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentPathSuccessful-variant Event
     */
    static constructor_payment_path_successful(payment_id, payment_hash, path) {
        const ret = bindings.Event_payment_path_successful(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(ret_hu_conv, path_conv_10); });
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentPathFailed-variant Event
     */
    static constructor_payment_path_failed(payment_id, payment_hash, payment_failed_permanently, network_update, all_paths_failed, path, short_channel_id, retry) {
        const ret = bindings.Event_payment_path_failed(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), payment_failed_permanently, CommonBase.get_ptr_of(network_update), all_paths_failed, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), CommonBase.get_ptr_of(short_channel_id), retry == null ? 0n : CommonBase.get_ptr_of(retry));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(ret_hu_conv, path_conv_10); });
        CommonBase.add_ref_from(ret_hu_conv, retry);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ProbeSuccessful-variant Event
     */
    static constructor_probe_successful(payment_id, payment_hash, path) {
        const ret = bindings.Event_probe_successful(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(ret_hu_conv, path_conv_10); });
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ProbeFailed-variant Event
     */
    static constructor_probe_failed(payment_id, payment_hash, path, short_channel_id) {
        const ret = bindings.Event_probe_failed(bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), CommonBase.get_ptr_of(short_channel_id));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(ret_hu_conv, path_conv_10); });
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PendingHTLCsForwardable-variant Event
     */
    static constructor_pending_htlcs_forwardable(time_forwardable) {
        const ret = bindings.Event_pending_htlcs_forwardable(time_forwardable);
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SpendableOutputs-variant Event
     */
    static constructor_spendable_outputs(outputs) {
        const ret = bindings.Event_spendable_outputs(bindings.encodeUint64Array(outputs != null ? outputs.map(outputs_conv_27 => CommonBase.get_ptr_of(outputs_conv_27)) : null));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaymentForwarded-variant Event
     */
    static constructor_payment_forwarded(prev_channel_id, next_channel_id, fee_earned_msat, claim_from_onchain_tx) {
        const ret = bindings.Event_payment_forwarded(bindings.encodeUint8Array(bindings.check_arr_len(prev_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(next_channel_id, 32)), CommonBase.get_ptr_of(fee_earned_msat), claim_from_onchain_tx);
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ChannelClosed-variant Event
     */
    static constructor_channel_closed(channel_id, user_channel_id, reason) {
        const ret = bindings.Event_channel_closed(bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), user_channel_id, CommonBase.get_ptr_of(reason));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DiscardFunding-variant Event
     */
    static constructor_discard_funding(channel_id, transaction) {
        const ret = bindings.Event_discard_funding(bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), bindings.encodeUint8Array(transaction));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new OpenChannelRequest-variant Event
     */
    static constructor_open_channel_request(temporary_channel_id, counterparty_node_id, funding_satoshis, push_msat, channel_type) {
        const ret = bindings.Event_open_channel_request(bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), funding_satoshis, push_msat, channel_type == null ? 0n : CommonBase.get_ptr_of(channel_type));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, channel_type);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new HTLCHandlingFailed-variant Event
     */
    static constructor_htlchandling_failed(prev_channel_id, failed_next_destination) {
        const ret = bindings.Event_htlchandling_failed(bindings.encodeUint8Array(bindings.check_arr_len(prev_channel_id, 32)), CommonBase.get_ptr_of(failed_next_destination));
        const ret_hu_conv = Event.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Serialize the Event object into a byte array which can be read by Event_read
     */
    write() {
        const ret = bindings.Event_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
/** A Event of type FundingGenerationReady */
export class Event_FundingGenerationReady extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const temporary_channel_id = bindings.LDKEvent_FundingGenerationReady_get_temporary_channel_id(ptr);
        const temporary_channel_id_conv = bindings.decodeUint8Array(temporary_channel_id);
        this.temporary_channel_id = temporary_channel_id_conv;
        const counterparty_node_id = bindings.LDKEvent_FundingGenerationReady_get_counterparty_node_id(ptr);
        const counterparty_node_id_conv = bindings.decodeUint8Array(counterparty_node_id);
        this.counterparty_node_id = counterparty_node_id_conv;
        this.channel_value_satoshis = bindings.LDKEvent_FundingGenerationReady_get_channel_value_satoshis(ptr);
        const output_script = bindings.LDKEvent_FundingGenerationReady_get_output_script(ptr);
        const output_script_conv = bindings.decodeUint8Array(output_script);
        this.output_script = output_script_conv;
        this.user_channel_id = bindings.LDKEvent_FundingGenerationReady_get_user_channel_id(ptr);
    }
}
/** A Event of type PaymentReceived */
export class Event_PaymentReceived extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_hash = bindings.LDKEvent_PaymentReceived_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        this.amount_msat = bindings.LDKEvent_PaymentReceived_get_amount_msat(ptr);
        const purpose = bindings.LDKEvent_PaymentReceived_get_purpose(ptr);
        const purpose_hu_conv = PaymentPurpose.constr_from_ptr(purpose);
        CommonBase.add_ref_from(purpose_hu_conv, this);
        this.purpose = purpose_hu_conv;
    }
}
/** A Event of type PaymentClaimed */
export class Event_PaymentClaimed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_hash = bindings.LDKEvent_PaymentClaimed_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        this.amount_msat = bindings.LDKEvent_PaymentClaimed_get_amount_msat(ptr);
        const purpose = bindings.LDKEvent_PaymentClaimed_get_purpose(ptr);
        const purpose_hu_conv = PaymentPurpose.constr_from_ptr(purpose);
        CommonBase.add_ref_from(purpose_hu_conv, this);
        this.purpose = purpose_hu_conv;
    }
}
/** A Event of type PaymentSent */
export class Event_PaymentSent extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_PaymentSent_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_preimage = bindings.LDKEvent_PaymentSent_get_payment_preimage(ptr);
        const payment_preimage_conv = bindings.decodeUint8Array(payment_preimage);
        this.payment_preimage = payment_preimage_conv;
        const payment_hash = bindings.LDKEvent_PaymentSent_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        const fee_paid_msat = bindings.LDKEvent_PaymentSent_get_fee_paid_msat(ptr);
        const fee_paid_msat_hu_conv = Option_u64Z.constr_from_ptr(fee_paid_msat);
        CommonBase.add_ref_from(fee_paid_msat_hu_conv, this);
        this.fee_paid_msat = fee_paid_msat_hu_conv;
    }
}
/** A Event of type PaymentFailed */
export class Event_PaymentFailed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_PaymentFailed_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_hash = bindings.LDKEvent_PaymentFailed_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
    }
}
/** A Event of type PaymentPathSuccessful */
export class Event_PaymentPathSuccessful extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_PaymentPathSuccessful_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_hash = bindings.LDKEvent_PaymentPathSuccessful_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        const path = bindings.LDKEvent_PaymentPathSuccessful_get_path(ptr);
        const path_conv_10_len = bindings.getArrayLength(path);
        const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
        for (var k = 0; k < path_conv_10_len; k++) {
            const path_conv_10 = bindings.getU64ArrayElem(path, k);
            const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
            CommonBase.add_ref_from(path_conv_10_hu_conv, this);
            path_conv_10_arr[k] = path_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(path);
        this.path = path_conv_10_arr;
    }
}
/** A Event of type PaymentPathFailed */
export class Event_PaymentPathFailed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_PaymentPathFailed_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_hash = bindings.LDKEvent_PaymentPathFailed_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        this.payment_failed_permanently = bindings.LDKEvent_PaymentPathFailed_get_payment_failed_permanently(ptr);
        const network_update = bindings.LDKEvent_PaymentPathFailed_get_network_update(ptr);
        const network_update_hu_conv = Option_NetworkUpdateZ.constr_from_ptr(network_update);
        CommonBase.add_ref_from(network_update_hu_conv, this);
        this.network_update = network_update_hu_conv;
        this.all_paths_failed = bindings.LDKEvent_PaymentPathFailed_get_all_paths_failed(ptr);
        const path = bindings.LDKEvent_PaymentPathFailed_get_path(ptr);
        const path_conv_10_len = bindings.getArrayLength(path);
        const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
        for (var k = 0; k < path_conv_10_len; k++) {
            const path_conv_10 = bindings.getU64ArrayElem(path, k);
            const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
            CommonBase.add_ref_from(path_conv_10_hu_conv, this);
            path_conv_10_arr[k] = path_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(path);
        this.path = path_conv_10_arr;
        const short_channel_id = bindings.LDKEvent_PaymentPathFailed_get_short_channel_id(ptr);
        const short_channel_id_hu_conv = Option_u64Z.constr_from_ptr(short_channel_id);
        CommonBase.add_ref_from(short_channel_id_hu_conv, this);
        this.short_channel_id = short_channel_id_hu_conv;
        const retry = bindings.LDKEvent_PaymentPathFailed_get_retry(ptr);
        const retry_hu_conv = new RouteParameters(null, retry);
        CommonBase.add_ref_from(retry_hu_conv, this);
        this.retry = retry_hu_conv;
    }
}
/** A Event of type ProbeSuccessful */
export class Event_ProbeSuccessful extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_ProbeSuccessful_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_hash = bindings.LDKEvent_ProbeSuccessful_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        const path = bindings.LDKEvent_ProbeSuccessful_get_path(ptr);
        const path_conv_10_len = bindings.getArrayLength(path);
        const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
        for (var k = 0; k < path_conv_10_len; k++) {
            const path_conv_10 = bindings.getU64ArrayElem(path, k);
            const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
            CommonBase.add_ref_from(path_conv_10_hu_conv, this);
            path_conv_10_arr[k] = path_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(path);
        this.path = path_conv_10_arr;
    }
}
/** A Event of type ProbeFailed */
export class Event_ProbeFailed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_id = bindings.LDKEvent_ProbeFailed_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
        const payment_hash = bindings.LDKEvent_ProbeFailed_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
        const path = bindings.LDKEvent_ProbeFailed_get_path(ptr);
        const path_conv_10_len = bindings.getArrayLength(path);
        const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
        for (var k = 0; k < path_conv_10_len; k++) {
            const path_conv_10 = bindings.getU64ArrayElem(path, k);
            const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
            CommonBase.add_ref_from(path_conv_10_hu_conv, this);
            path_conv_10_arr[k] = path_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(path);
        this.path = path_conv_10_arr;
        const short_channel_id = bindings.LDKEvent_ProbeFailed_get_short_channel_id(ptr);
        const short_channel_id_hu_conv = Option_u64Z.constr_from_ptr(short_channel_id);
        CommonBase.add_ref_from(short_channel_id_hu_conv, this);
        this.short_channel_id = short_channel_id_hu_conv;
    }
}
/** A Event of type PendingHTLCsForwardable */
export class Event_PendingHTLCsForwardable extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.time_forwardable = bindings.LDKEvent_PendingHTLCsForwardable_get_time_forwardable(ptr);
    }
}
/** A Event of type SpendableOutputs */
export class Event_SpendableOutputs extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const outputs = bindings.LDKEvent_SpendableOutputs_get_outputs(ptr);
        const outputs_conv_27_len = bindings.getArrayLength(outputs);
        const outputs_conv_27_arr = new Array(outputs_conv_27_len).fill(null);
        for (var b = 0; b < outputs_conv_27_len; b++) {
            const outputs_conv_27 = bindings.getU64ArrayElem(outputs, b);
            const outputs_conv_27_hu_conv = SpendableOutputDescriptor.constr_from_ptr(outputs_conv_27);
            CommonBase.add_ref_from(outputs_conv_27_hu_conv, this);
            outputs_conv_27_arr[b] = outputs_conv_27_hu_conv;
        }
        bindings.freeWasmMemory(outputs);
        this.outputs = outputs_conv_27_arr;
    }
}
/** A Event of type PaymentForwarded */
export class Event_PaymentForwarded extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const prev_channel_id = bindings.LDKEvent_PaymentForwarded_get_prev_channel_id(ptr);
        const prev_channel_id_conv = bindings.decodeUint8Array(prev_channel_id);
        this.prev_channel_id = prev_channel_id_conv;
        const next_channel_id = bindings.LDKEvent_PaymentForwarded_get_next_channel_id(ptr);
        const next_channel_id_conv = bindings.decodeUint8Array(next_channel_id);
        this.next_channel_id = next_channel_id_conv;
        const fee_earned_msat = bindings.LDKEvent_PaymentForwarded_get_fee_earned_msat(ptr);
        const fee_earned_msat_hu_conv = Option_u64Z.constr_from_ptr(fee_earned_msat);
        CommonBase.add_ref_from(fee_earned_msat_hu_conv, this);
        this.fee_earned_msat = fee_earned_msat_hu_conv;
        this.claim_from_onchain_tx = bindings.LDKEvent_PaymentForwarded_get_claim_from_onchain_tx(ptr);
    }
}
/** A Event of type ChannelClosed */
export class Event_ChannelClosed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const channel_id = bindings.LDKEvent_ChannelClosed_get_channel_id(ptr);
        const channel_id_conv = bindings.decodeUint8Array(channel_id);
        this.channel_id = channel_id_conv;
        this.user_channel_id = bindings.LDKEvent_ChannelClosed_get_user_channel_id(ptr);
        const reason = bindings.LDKEvent_ChannelClosed_get_reason(ptr);
        const reason_hu_conv = ClosureReason.constr_from_ptr(reason);
        CommonBase.add_ref_from(reason_hu_conv, this);
        this.reason = reason_hu_conv;
    }
}
/** A Event of type DiscardFunding */
export class Event_DiscardFunding extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const channel_id = bindings.LDKEvent_DiscardFunding_get_channel_id(ptr);
        const channel_id_conv = bindings.decodeUint8Array(channel_id);
        this.channel_id = channel_id_conv;
        const transaction = bindings.LDKEvent_DiscardFunding_get_transaction(ptr);
        const transaction_conv = bindings.decodeUint8Array(transaction);
        this.transaction = transaction_conv;
    }
}
/** A Event of type OpenChannelRequest */
export class Event_OpenChannelRequest extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const temporary_channel_id = bindings.LDKEvent_OpenChannelRequest_get_temporary_channel_id(ptr);
        const temporary_channel_id_conv = bindings.decodeUint8Array(temporary_channel_id);
        this.temporary_channel_id = temporary_channel_id_conv;
        const counterparty_node_id = bindings.LDKEvent_OpenChannelRequest_get_counterparty_node_id(ptr);
        const counterparty_node_id_conv = bindings.decodeUint8Array(counterparty_node_id);
        this.counterparty_node_id = counterparty_node_id_conv;
        this.funding_satoshis = bindings.LDKEvent_OpenChannelRequest_get_funding_satoshis(ptr);
        this.push_msat = bindings.LDKEvent_OpenChannelRequest_get_push_msat(ptr);
        const channel_type = bindings.LDKEvent_OpenChannelRequest_get_channel_type(ptr);
        const channel_type_hu_conv = new ChannelTypeFeatures(null, channel_type);
        CommonBase.add_ref_from(channel_type_hu_conv, this);
        this.channel_type = channel_type_hu_conv;
    }
}
/** A Event of type HTLCHandlingFailed */
export class Event_HTLCHandlingFailed extends Event {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const prev_channel_id = bindings.LDKEvent_HTLCHandlingFailed_get_prev_channel_id(ptr);
        const prev_channel_id_conv = bindings.decodeUint8Array(prev_channel_id);
        this.prev_channel_id = prev_channel_id_conv;
        const failed_next_destination = bindings.LDKEvent_HTLCHandlingFailed_get_failed_next_destination(ptr);
        const failed_next_destination_hu_conv = HTLCDestination.constr_from_ptr(failed_next_destination);
        CommonBase.add_ref_from(failed_next_destination_hu_conv, this);
        this.failed_next_destination = failed_next_destination_hu_conv;
    }
}
//# sourceMappingURL=Event.mjs.map