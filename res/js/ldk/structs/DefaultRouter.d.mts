import { Logger } from '../structs/Logger.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { LockableScore } from '../structs/LockableScore.mjs';
import { Router } from '../structs/Router.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A [`Router`] implemented using [`find_route`].
 */
export declare class DefaultRouter extends CommonBase {
    /**
     * Creates a new router using the given [`NetworkGraph`], a [`Logger`], and a randomness source
     * `random_seed_bytes`.
     */
    static constructor_new(network_graph: NetworkGraph, logger: Logger, random_seed_bytes: Uint8Array, scorer: LockableScore): DefaultRouter;
    /**
     * Constructs a new Router which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Router must be freed before this_arg is
     */
    as_Router(): Router;
}
