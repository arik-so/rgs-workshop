import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKBroadcasterInterfaceHolder {
}
/**
 * An interface to send a transaction to the Bitcoin network.
 */
export class BroadcasterInterface extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BroadcasterInterface_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of BroadcasterInterface from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKBroadcasterInterfaceHolder();
        let structImplementation = {
            broadcast_transaction(tx) {
                const tx_conv = bindings.decodeUint8Array(tx);
                arg.broadcast_transaction(tx_conv);
            },
        };
        const ptr_idx = bindings.LDKBroadcasterInterface_new(structImplementation);
        impl_holder.held = new BroadcasterInterface(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Sends a transaction out to (hopefully) be mined.
     */
    broadcast_transaction(tx) {
        bindings.BroadcasterInterface_broadcast_transaction(this.ptr, bindings.encodeUint8Array(tx));
    }
}
//# sourceMappingURL=BroadcasterInterface.mjs.map