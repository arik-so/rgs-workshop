import { LockableScore } from '../structs/LockableScore.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKWriteableScoreHolder {
}
/**
 * Refers to a scorer that is accessible under lock and also writeable to disk
 *
 * We need this trait to be able to pass in a scorer to `lightning-background-processor` that will enable us to
 * use the Persister to persist it.
 */
export class WriteableScore extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.WriteableScore_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of WriteableScore from a given implementation */
    static new_impl(arg, lockableScore_impl) {
        const impl_holder = new LDKWriteableScoreHolder();
        let structImplementation = {
            write() {
                const ret = arg.write();
                const result = bindings.encodeUint8Array(ret);
                return result;
            },
        };
        const lockableScore = LockableScore.new_impl(lockableScore_impl);
        const ptr_idx = bindings.LDKWriteableScore_new(structImplementation, lockableScore.instance_idx);
        impl_holder.held = new WriteableScore(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        impl_holder.held.ptrs_to.push(lockableScore);
        return impl_holder.held;
    }
    /**
     * Serialize the object into a byte array
     */
    write() {
        const ret = bindings.WriteableScore_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=WriteableScore.mjs.map