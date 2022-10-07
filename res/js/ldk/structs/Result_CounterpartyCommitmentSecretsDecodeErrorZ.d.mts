import { DecodeError } from '../structs/DecodeError.mjs';
import { CounterpartyCommitmentSecrets } from '../structs/CounterpartyCommitmentSecrets.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_CounterpartyCommitmentSecretsDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ in the success state.
     */
    static constructor_ok(o: CounterpartyCommitmentSecrets): Result_CounterpartyCommitmentSecretsDecodeErrorZ;
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_CounterpartyCommitmentSecretsDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CounterpartyCommitmentSecretsDecodeErrorZ;
}
export declare class Result_CounterpartyCommitmentSecretsDecodeErrorZ_OK extends Result_CounterpartyCommitmentSecretsDecodeErrorZ {
    res: CounterpartyCommitmentSecrets;
}
export declare class Result_CounterpartyCommitmentSecretsDecodeErrorZ_Err extends Result_CounterpartyCommitmentSecretsDecodeErrorZ {
    err: DecodeError;
}
