import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKFeeEstimatorHolder {
}
/**
 * A trait which should be implemented to provide feerate information on a number of time
 * horizons.
 *
 * Note that all of the functions implemented here *must* be reentrant-safe (obviously - they're
 * called from inside the library in response to chain events, P2P events, or timer events).
 */
export class FeeEstimator extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.FeeEstimator_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of FeeEstimator from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKFeeEstimatorHolder();
        let structImplementation = {
            get_est_sat_per_1000_weight(confirmation_target) {
                const ret = arg.get_est_sat_per_1000_weight(confirmation_target);
                return ret;
            },
        };
        const ptr_idx = bindings.LDKFeeEstimator_new(structImplementation);
        impl_holder.held = new FeeEstimator(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Gets estimated satoshis of fee required per 1000 Weight-Units.
     *
     * LDK will wrap this method and ensure that the value returned is no smaller than 253
     * (ie 1 satoshi-per-byte rounded up to ensure later round-downs don't put us below 1 satoshi-per-byte).
     *
     * The following unit conversions can be used to convert to sats/KW:
     * satoshis-per-byte * 250
     * satoshis-per-kbyte / 4
     */
    get_est_sat_per_1000_weight(confirmation_target) {
        const ret = bindings.FeeEstimator_get_est_sat_per_1000_weight(this.ptr, confirmation_target);
        return ret;
    }
}
//# sourceMappingURL=FeeEstimator.mjs.map