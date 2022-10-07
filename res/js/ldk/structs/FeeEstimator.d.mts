import { ConfirmationTarget } from '../enums/ConfirmationTarget.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of FeeEstimator */
export interface FeeEstimatorInterface {
    /**Gets estimated satoshis of fee required per 1000 Weight-Units.
     *
     * LDK will wrap this method and ensure that the value returned is no smaller than 253
     * (ie 1 satoshi-per-byte rounded up to ensure later round-downs don't put us below 1 satoshi-per-byte).
     *
     * The following unit conversions can be used to convert to sats/KW:
     * satoshis-per-byte * 250
     * satoshis-per-kbyte / 4
     */
    get_est_sat_per_1000_weight(confirmation_target: ConfirmationTarget): number;
}
/**
 * A trait which should be implemented to provide feerate information on a number of time
 * horizons.
 *
 * Note that all of the functions implemented here *must* be reentrant-safe (obviously - they're
 * called from inside the library in response to chain events, P2P events, or timer events).
 */
export declare class FeeEstimator extends CommonBase {
    /** Creates a new instance of FeeEstimator from a given implementation */
    static new_impl(arg: FeeEstimatorInterface): FeeEstimator;
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
    get_est_sat_per_1000_weight(confirmation_target: ConfirmationTarget): number;
}
