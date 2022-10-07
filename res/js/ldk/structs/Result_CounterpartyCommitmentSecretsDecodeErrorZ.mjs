import { DecodeError } from '../structs/DecodeError.mjs';
import { CounterpartyCommitmentSecrets } from '../structs/CounterpartyCommitmentSecrets.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_CounterpartyCommitmentSecretsDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_is_ok(ptr)) {
            return new Result_CounterpartyCommitmentSecretsDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_CounterpartyCommitmentSecretsDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_CounterpartyCommitmentSecretsDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_CounterpartyCommitmentSecretsDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_CounterpartyCommitmentSecretsDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_CounterpartyCommitmentSecretsDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_CounterpartyCommitmentSecretsDecodeErrorZ_OK extends Result_CounterpartyCommitmentSecretsDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new CounterpartyCommitmentSecrets(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_CounterpartyCommitmentSecretsDecodeErrorZ_Err extends Result_CounterpartyCommitmentSecretsDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_CounterpartyCommitmentSecretsDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_CounterpartyCommitmentSecretsDecodeErrorZ.mjs.map