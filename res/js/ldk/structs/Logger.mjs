import { Record } from '../structs/Record.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKLoggerHolder {
}
/**
 * A trait encapsulating the operations required of a logger
 */
export class Logger extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Logger_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Logger from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKLoggerHolder();
        let structImplementation = {
            log(record) {
                const record_hu_conv = new Record(null, record);
                arg.log(record_hu_conv);
            },
        };
        const ptr_idx = bindings.LDKLogger_new(structImplementation);
        impl_holder.held = new Logger(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
}
//# sourceMappingURL=Logger.mjs.map