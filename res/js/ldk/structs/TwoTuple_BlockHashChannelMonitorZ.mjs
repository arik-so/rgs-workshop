import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_BlockHashChannelMonitorZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_BlockHashChannelMonitorZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_get_b(this.ptr);
        const ret_hu_conv = new ChannelMonitor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_clone(this.ptr);
        const ret_hu_conv = new TwoTuple_BlockHashChannelMonitorZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_BlockHashChannelMonitorZ from the contained elements.
     */
    static constructor_new(a, b) {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 32)), b == null ? 0n : CommonBase.get_ptr_of(b));
        const ret_hu_conv = new TwoTuple_BlockHashChannelMonitorZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, b);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_BlockHashChannelMonitorZ.mjs.map