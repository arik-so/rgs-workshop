import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { ChannelManager } from '../structs/ChannelManager.mjs';
import { Result_NoneErrorZ } from '../structs/Result_NoneErrorZ.mjs';
import { WriteableScore } from '../structs/WriteableScore.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Persister */
export interface PersisterInterface {
    /**Persist the given ['ChannelManager'] to disk, returning an error if persistence failed.
     */
    persist_manager(channel_manager: ChannelManager): Result_NoneErrorZ;
    /**Persist the given [`NetworkGraph`] to disk, returning an error if persistence failed.
     */
    persist_graph(network_graph: NetworkGraph): Result_NoneErrorZ;
    /**Persist the given [`WriteableScore`] to disk, returning an error if persistence failed.
     */
    persist_scorer(scorer: WriteableScore): Result_NoneErrorZ;
}
/**
 * Trait that handles persisting a [`ChannelManager`], [`NetworkGraph`], and [`WriteableScore`] to disk.
 */
export declare class Persister extends CommonBase {
    /** Creates a new instance of Persister from a given implementation */
    static new_impl(arg: PersisterInterface): Persister;
    /**
     * Persist the given ['ChannelManager'] to disk, returning an error if persistence failed.
     */
    persist_manager(channel_manager: ChannelManager): Result_NoneErrorZ;
    /**
     * Persist the given [`NetworkGraph`] to disk, returning an error if persistence failed.
     */
    persist_graph(network_graph: NetworkGraph): Result_NoneErrorZ;
    /**
     * Persist the given [`WriteableScore`] to disk, returning an error if persistence failed.
     */
    persist_scorer(scorer: WriteableScore): Result_NoneErrorZ;
}
