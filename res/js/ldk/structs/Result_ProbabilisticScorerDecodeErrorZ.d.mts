import { DecodeError } from '../structs/DecodeError.mjs';
import { Logger } from '../structs/Logger.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { ProbabilisticScorer } from '../structs/ProbabilisticScorer.mjs';
import { ProbabilisticScoringParameters } from '../structs/ProbabilisticScoringParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ProbabilisticScorerDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ProbabilisticScorerDecodeErrorZ in the success state.
     */
    static constructor_ok(o_params: ProbabilisticScoringParameters, o_network_graph: NetworkGraph, o_logger: Logger): Result_ProbabilisticScorerDecodeErrorZ;
    /**
     * Creates a new CResult_ProbabilisticScorerDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ProbabilisticScorerDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_ProbabilisticScorerDecodeErrorZ_OK extends Result_ProbabilisticScorerDecodeErrorZ {
    res: ProbabilisticScorer;
}
export declare class Result_ProbabilisticScorerDecodeErrorZ_Err extends Result_ProbabilisticScorerDecodeErrorZ {
    err: DecodeError;
}