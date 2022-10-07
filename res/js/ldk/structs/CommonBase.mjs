function freer(f) { f(); }
const finalizer = new FinalizationRegistry(freer);
function get_freeer(ptr, free_fn) {
    return () => {
        free_fn(ptr);
    };
}
export class CommonBase {
    constructor(ptr, free_fn) {
        this.ptrs_to = [];
        this.ptr = ptr;
        if (ptr != 0n) {
            finalizer.register(this, get_freeer(ptr, free_fn), this);
        }
    }
    // In Java, protected means "any subclass can access fields on any other subclass'"
    // In TypeScript, protected means "any subclass can access parent fields on instances of itself"
    // To work around this, we add accessors for other instances' protected fields here.
    static add_ref_from(holder, referent) {
        if (holder !== null) {
            holder.ptrs_to.push(referent);
        }
    }
    static get_ptr_of(o) {
        return o.ptr;
    }
    static set_null_skip_free(o) {
        o.ptr = 0n;
        // @ts-ignore TypeScript is wrong about the returnvalue of unregister here!
        const did_unregister = finalizer.unregister(o);
        if (!did_unregister)
            throw new Error("FinalizationRegistry unregister should always unregister unless you double-free'd");
    }
}
export class UInt5 {
    constructor(val) {
        this.val = val;
        if (val > 32 || val < 0)
            throw new Error("UInt5 value is out of range");
    }
    getVal() {
        return this.val;
    }
}
export class WitnessVersion {
    constructor(val) {
        this.val = val;
        if (val > 16 || val < 0)
            throw new Error("WitnessVersion value is out of range");
    }
    getVal() {
        return this.val;
    }
}
export class UnqualifiedError {
    constructor(val) { }
}
//# sourceMappingURL=CommonBase.mjs.map