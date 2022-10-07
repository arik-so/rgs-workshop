import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { ChannelManager } from '../structs/ChannelManager.mjs';
import { Result_NoneErrorZ } from '../structs/Result_NoneErrorZ.mjs';
import { WriteableScore } from '../structs/WriteableScore.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKPersisterHolder {
}
/**
 * Trait that handles persisting a [`ChannelManager`], [`NetworkGraph`], and [`WriteableScore`] to disk.
 */
export class Persister extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Persister_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Persister from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKPersisterHolder();
        let structImplementation = {
            persist_manager(channel_manager) {
                const channel_manager_hu_conv = new ChannelManager(null, channel_manager);
                const ret = arg.persist_manager(channel_manager_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            persist_graph(network_graph) {
                const network_graph_hu_conv = new NetworkGraph(null, network_graph);
                const ret = arg.persist_graph(network_graph_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            persist_scorer(scorer) {
                const ret_hu_conv = new WriteableScore(null, scorer);
                CommonBase.add_ref_from(ret_hu_conv, this);
                const ret = arg.persist_scorer(ret_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const ptr_idx = bindings.LDKPersister_new(structImplementation);
        impl_holder.held = new Persister(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Persist the given ['ChannelManager'] to disk, returning an error if persistence failed.
     */
    persist_manager(channel_manager) {
        const ret = bindings.Persister_persist_manager(this.ptr, channel_manager == null ? 0n : CommonBase.get_ptr_of(channel_manager));
        const ret_hu_conv = Result_NoneErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, channel_manager);
        return ret_hu_conv;
    }
    /**
     * Persist the given [`NetworkGraph`] to disk, returning an error if persistence failed.
     */
    persist_graph(network_graph) {
        const ret = bindings.Persister_persist_graph(this.ptr, network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph));
        const ret_hu_conv = Result_NoneErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, network_graph);
        return ret_hu_conv;
    }
    /**
     * Persist the given [`WriteableScore`] to disk, returning an error if persistence failed.
     */
    persist_scorer(scorer) {
        const ret = bindings.Persister_persist_scorer(this.ptr, scorer == null ? 0n : CommonBase.get_ptr_of(scorer));
        const ret_hu_conv = Result_NoneErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, scorer);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Persister.mjs.map