import { UpdateAddHTLC } from '../structs/UpdateAddHTLC.mjs';
import { UpdateFulfillHTLC } from '../structs/UpdateFulfillHTLC.mjs';
import { UpdateFailHTLC } from '../structs/UpdateFailHTLC.mjs';
import { UpdateFailMalformedHTLC } from '../structs/UpdateFailMalformedHTLC.mjs';
import { CommitmentSigned } from '../structs/CommitmentSigned.mjs';
import { UpdateFee } from '../structs/UpdateFee.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Struct used to return values from revoke_and_ack messages, containing a bunch of commitment
 * transaction updates if they were pending.
 */
export declare class CommitmentUpdate extends CommonBase {
    /**
     * update_add_htlc messages which should be sent
     */
    get_update_add_htlcs(): UpdateAddHTLC[];
    /**
     * update_add_htlc messages which should be sent
     */
    set_update_add_htlcs(val: UpdateAddHTLC[]): void;
    /**
     * update_fulfill_htlc messages which should be sent
     */
    get_update_fulfill_htlcs(): UpdateFulfillHTLC[];
    /**
     * update_fulfill_htlc messages which should be sent
     */
    set_update_fulfill_htlcs(val: UpdateFulfillHTLC[]): void;
    /**
     * update_fail_htlc messages which should be sent
     */
    get_update_fail_htlcs(): UpdateFailHTLC[];
    /**
     * update_fail_htlc messages which should be sent
     */
    set_update_fail_htlcs(val: UpdateFailHTLC[]): void;
    /**
     * update_fail_malformed_htlc messages which should be sent
     */
    get_update_fail_malformed_htlcs(): UpdateFailMalformedHTLC[];
    /**
     * update_fail_malformed_htlc messages which should be sent
     */
    set_update_fail_malformed_htlcs(val: UpdateFailMalformedHTLC[]): void;
    /**
     * An update_fee message which should be sent
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_update_fee(): UpdateFee;
    /**
     * An update_fee message which should be sent
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_update_fee(val: UpdateFee): void;
    /**
     * Finally, the commitment_signed message which should be sent
     */
    get_commitment_signed(): CommitmentSigned;
    /**
     * Finally, the commitment_signed message which should be sent
     */
    set_commitment_signed(val: CommitmentSigned): void;
    /**
     * Constructs a new CommitmentUpdate given each field
     */
    static constructor_new(update_add_htlcs_arg: UpdateAddHTLC[], update_fulfill_htlcs_arg: UpdateFulfillHTLC[], update_fail_htlcs_arg: UpdateFailHTLC[], update_fail_malformed_htlcs_arg: UpdateFailMalformedHTLC[], update_fee_arg: UpdateFee, commitment_signed_arg: CommitmentSigned): CommitmentUpdate;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the CommitmentUpdate
     */
    clone(): CommitmentUpdate;
}
