import { Logger } from '../structs/Logger.mjs';
import { Watch } from '../structs/Watch.mjs';
import { BroadcasterInterface } from '../structs/BroadcasterInterface.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { FeeEstimator } from '../structs/FeeEstimator.mjs';
import { ChannelManager } from '../structs/ChannelManager.mjs';
import { UserConfig } from '../structs/UserConfig.mjs';
import { ChainParameters } from '../structs/ChainParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_BlockHashChannelManagerZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): ChannelManager;
    /**
     * Creates a new C2Tuple_BlockHashChannelManagerZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b_fee_est: FeeEstimator, b_chain_monitor: Watch, b_tx_broadcaster: BroadcasterInterface, b_logger: Logger, b_keys_manager: KeysInterface, b_config: UserConfig, b_params: ChainParameters): TwoTuple_BlockHashChannelManagerZ;
}
