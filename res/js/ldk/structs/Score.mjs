import { RouteHop } from '../structs/RouteHop.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { ChannelUsage } from '../structs/ChannelUsage.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKScoreHolder {
}
/**
 * An interface used to score payment channels for path finding.
 *
 * \tScoring is in terms of fees willing to be paid in order to avoid routing through a channel.
 */
export class Score extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Score_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Score from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKScoreHolder();
        let structImplementation = {
            channel_penalty_msat(short_channel_id, source, target, usage) {
                const source_hu_conv = new NodeId(null, source);
                const target_hu_conv = new NodeId(null, target);
                const usage_hu_conv = new ChannelUsage(null, usage);
                CommonBase.add_ref_from(usage_hu_conv, this);
                const ret = arg.channel_penalty_msat(short_channel_id, source_hu_conv, target_hu_conv, usage_hu_conv);
                return ret;
            },
            payment_path_failed(path, short_channel_id) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.payment_path_failed(path_conv_10_arr, short_channel_id);
            },
            payment_path_successful(path) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.payment_path_successful(path_conv_10_arr);
            },
            probe_failed(path, short_channel_id) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.probe_failed(path_conv_10_arr, short_channel_id);
            },
            probe_successful(path) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.probe_successful(path_conv_10_arr);
            },
            write() {
                const ret = arg.write();
                const result = bindings.encodeUint8Array(ret);
                return result;
            },
        };
        const ptr_idx = bindings.LDKScore_new(structImplementation);
        impl_holder.held = new Score(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Returns the fee in msats willing to be paid to avoid routing `send_amt_msat` through the
     * given channel in the direction from `source` to `target`.
     *
     * The channel's capacity (less any other MPP parts that are also being considered for use in
     * the same payment) is given by `capacity_msat`. It may be determined from various sources
     * such as a chain data, network gossip, or invoice hints. For invoice hints, a capacity near
     * [`u64::max_value`] is given to indicate sufficient capacity for the invoice's full amount.
     * Thus, implementations should be overflow-safe.
     */
    channel_penalty_msat(short_channel_id, source, target, usage) {
        const ret = bindings.Score_channel_penalty_msat(this.ptr, short_channel_id, source == null ? 0n : CommonBase.get_ptr_of(source), target == null ? 0n : CommonBase.get_ptr_of(target), usage == null ? 0n : CommonBase.get_ptr_of(usage));
        CommonBase.add_ref_from(this, source);
        CommonBase.add_ref_from(this, target);
        CommonBase.add_ref_from(this, usage);
        return ret;
    }
    /**
     * Handles updating channel penalties after failing to route through a channel.
     */
    payment_path_failed(path, short_channel_id) {
        bindings.Score_payment_path_failed(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), short_channel_id);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Handles updating channel penalties after successfully routing along a path.
     */
    payment_path_successful(path) {
        bindings.Score_payment_path_successful(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Handles updating channel penalties after a probe over the given path failed.
     */
    probe_failed(path, short_channel_id) {
        bindings.Score_probe_failed(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), short_channel_id);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Handles updating channel penalties after a probe over the given path succeeded.
     */
    probe_successful(path) {
        bindings.Score_probe_successful(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Serialize the object into a byte array
     */
    write() {
        const ret = bindings.Score_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=Score.mjs.map