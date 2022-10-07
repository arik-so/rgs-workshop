export declare class CommonBase {
    protected ptr: bigint;
    protected ptrs_to: object[];
    protected constructor(ptr: bigint, free_fn: (ptr: bigint) => void);
    protected static add_ref_from(holder: CommonBase, referent: object): void;
    protected static get_ptr_of(o: CommonBase): bigint;
    protected static set_null_skip_free(o: CommonBase): void;
}
export declare class UInt5 {
    private val;
    constructor(val: number);
    getVal(): number;
}
export declare class WitnessVersion {
    private val;
    constructor(val: number);
    getVal(): number;
}
export declare class UnqualifiedError {
    constructor(val: number);
}