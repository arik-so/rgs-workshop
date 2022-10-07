import { Network } from '../enums/Network.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The best known block as identified by its hash and height.
 */
export declare class BestBlock extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the BestBlock
     */
    clone(): BestBlock;
    /**
     * Constructs a `BestBlock` that represents the genesis block at height 0 of the given
     * network.
     */
    static constructor_from_genesis(network: Network): BestBlock;
    /**
     * Returns a `BestBlock` as identified by the given block hash and height.
     */
    static constructor_new(block_hash: Uint8Array, height: number): BestBlock;
    /**
     * Returns the best block hash.
     */
    block_hash(): Uint8Array;
    /**
     * Returns the best block height.
     */
    height(): number;
}
