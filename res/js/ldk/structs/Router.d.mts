import { RouteHop } from '../structs/RouteHop.mjs';
import { RouteParameters } from '../structs/RouteParameters.mjs';
import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_RouteLightningErrorZ } from '../structs/Result_RouteLightningErrorZ.mjs';
import { InFlightHtlcs } from '../structs/InFlightHtlcs.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Router */
export interface RouterInterface {
    /**Finds a [`Route`] between `payer` and `payee` for a payment with the given values.
     *
     * Note that first_hops (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    find_route(payer: Uint8Array, route_params: RouteParameters, payment_hash: Uint8Array, first_hops: ChannelDetails[], inflight_htlcs: InFlightHtlcs): Result_RouteLightningErrorZ;
    /**Lets the router know that payment through a specific path has failed.
     */
    notify_payment_path_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**Lets the router know that payment through a specific path was successful.
     */
    notify_payment_path_successful(path: RouteHop[]): void;
    /**Lets the router know that a payment probe was successful.
     */
    notify_payment_probe_successful(path: RouteHop[]): void;
    /**Lets the router know that a payment probe failed.
     */
    notify_payment_probe_failed(path: RouteHop[], short_channel_id: bigint): void;
}
/**
 * A trait defining behavior for routing an [`Invoice`] payment.
 */
export declare class Router extends CommonBase {
    /** Creates a new instance of Router from a given implementation */
    static new_impl(arg: RouterInterface): Router;
    /**
     * Finds a [`Route`] between `payer` and `payee` for a payment with the given values.
     *
     * Note that first_hops (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    find_route(payer: Uint8Array, route_params: RouteParameters, payment_hash: Uint8Array, first_hops: ChannelDetails[], inflight_htlcs: InFlightHtlcs): Result_RouteLightningErrorZ;
    /**
     * Lets the router know that payment through a specific path has failed.
     */
    notify_payment_path_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**
     * Lets the router know that payment through a specific path was successful.
     */
    notify_payment_path_successful(path: RouteHop[]): void;
    /**
     * Lets the router know that a payment probe was successful.
     */
    notify_payment_probe_successful(path: RouteHop[]): void;
    /**
     * Lets the router know that a payment probe failed.
     */
    notify_payment_probe_failed(path: RouteHop[], short_channel_id: bigint): void;
}
