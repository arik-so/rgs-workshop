export declare function freeWasmMemory(pointer: number): void;
/**
 * An error when accessing the chain via [`Access`].
 */
export declare enum AccessError {
    /**
     * The requested chain is unknown.
     */
    LDKAccessError_UnknownChain = 0,
    /**
     * The requested transaction doesn't exist or hasn't confirmed.
     */
    LDKAccessError_UnknownTx = 1
}
/**
 * An enum which can either contain a  or not
 */
export declare enum COption_NoneZ {
    /**
     * When we're in this state, this COption_NoneZ contains a
     */
    LDKCOption_NoneZ_Some = 0,
    /**
     * When we're in this state, this COption_NoneZ contains nothing
     */
    LDKCOption_NoneZ_None = 1
}
/**
 * An error enum representing a failure to persist a channel monitor update.
 */
export declare enum ChannelMonitorUpdateErr {
    /**
     * Used to indicate a temporary failure (eg connection to a watchtower or remote backup of
    our state failed, but is expected to succeed at some point in the future).
    
    Such a failure will \"freeze\" a channel, preventing us from revoking old states or
    submitting new commitment transactions to the counterparty. Once the update(s) that failed
    have been successfully applied, a [`MonitorEvent::UpdateCompleted`] event should be returned
    via [`Watch::release_pending_monitor_events`] which will then restore the channel to an
    operational state.
    
    Note that a given ChannelManager will *never* re-generate a given ChannelMonitorUpdate. If
    you return a TemporaryFailure you must ensure that it is written to disk safely before
    writing out the latest ChannelManager state.
    
    Even when a channel has been \"frozen\" updates to the ChannelMonitor can continue to occur
    (eg if an inbound HTLC which we forwarded was claimed upstream resulting in us attempting
    to claim it on this channel) and those updates must be applied wherever they can be. At
    least one such updated ChannelMonitor must be persisted otherwise PermanentFailure should
    be returned to get things on-chain ASAP using only the in-memory copy. Obviously updates to
    the channel which would invalidate previous ChannelMonitors are not made when a channel has
    been \"frozen\".
    
    Note that even if updates made after TemporaryFailure succeed you must still provide a
    [`MonitorEvent::UpdateCompleted`] to ensure you have the latest monitor and re-enable
    normal channel operation. Note that this is normally generated through a call to
    [`ChainMonitor::channel_monitor_updated`].
    
    Note that the update being processed here will not be replayed for you when you return a
    [`MonitorEvent::UpdateCompleted`] event via [`Watch::release_pending_monitor_events`], so
    you must store the update itself on your own local disk prior to returning a
    TemporaryFailure. You may, of course, employ a journaling approach, storing only the
    ChannelMonitorUpdate on disk without updating the monitor itself, replaying the journal at
    reload-time.
    
    For deployments where a copy of ChannelMonitors and other local state are backed up in a
    remote location (with local copies persisted immediately), it is anticipated that all
    updates will return TemporaryFailure until the remote copies could be updated.
    
    [`ChainMonitor::channel_monitor_updated`]: chainmonitor::ChainMonitor::channel_monitor_updated
     */
    LDKChannelMonitorUpdateErr_TemporaryFailure = 0,
    /**
     * Used to indicate no further channel monitor updates will be allowed (eg we've moved on to a
    different watchtower and cannot update with all watchtowers that were previously informed
    of this channel).
    
    At reception of this error, ChannelManager will force-close the channel and return at
    least a final ChannelMonitorUpdate::ChannelForceClosed which must be delivered to at
    least one ChannelMonitor copy. Revocation secret MUST NOT be released and offchain channel
    update must be rejected.
    
    This failure may also signal a failure to update the local persisted copy of one of
    the channel monitor instance.
    
    Note that even when you fail a holder commitment transaction update, you must store the
    update to ensure you can claim from it in case of a duplicate copy of this ChannelMonitor
    broadcasts it (e.g distributed channel-monitor deployment)
    
    In case of distributed watchtowers deployment, the new version must be written to disk, as
    state may have been stored but rejected due to a block forcing a commitment broadcast. This
    storage is used to claim outputs of rejected state confirmed onchain by another watchtower,
    lagging behind on block processing.
     */
    LDKChannelMonitorUpdateErr_PermanentFailure = 1
}
/**
 * An enum that represents the speed at which we want a transaction to confirm used for feerate
 * estimation.
 */
export declare enum ConfirmationTarget {
    /**
     * We are happy with this transaction confirming slowly when feerate drops some.
     */
    LDKConfirmationTarget_Background = 0,
    /**
     * We'd like this transaction to confirm without major delay, but 12-18 blocks is fine.
     */
    LDKConfirmationTarget_Normal = 1,
    /**
     * We'd like this transaction to confirm in the next few blocks.
     */
    LDKConfirmationTarget_HighPriority = 2
}
/**
 * Errors that may occur when constructing a new `RawInvoice` or `Invoice`
 */
export declare enum CreationError {
    /**
     * The supplied description string was longer than 639 __bytes__ (see [`Description::new(...)`](./struct.Description.html#method.new))
     */
    LDKCreationError_DescriptionTooLong = 0,
    /**
     * The specified route has too many hops and can't be encoded
     */
    LDKCreationError_RouteTooLong = 1,
    /**
     * The Unix timestamp of the supplied date is less than zero or greater than 35-bits
     */
    LDKCreationError_TimestampOutOfBounds = 2,
    /**
     * The supplied millisatoshi amount was greater than the total bitcoin supply.
     */
    LDKCreationError_InvalidAmount = 3,
    /**
     * Route hints were required for this invoice and were missing. Applies to
    [phantom invoices].
    
    [phantom invoices]: crate::utils::create_phantom_invoice
     */
    LDKCreationError_MissingRouteHints = 4
}
/**
 * Enum representing the crypto currencies (or networks) supported by this library
 */
export declare enum Currency {
    /**
     * Bitcoin mainnet
     */
    LDKCurrency_Bitcoin = 0,
    /**
     * Bitcoin testnet
     */
    LDKCurrency_BitcoinTestnet = 1,
    /**
     * Bitcoin regtest
     */
    LDKCurrency_Regtest = 2,
    /**
     * Bitcoin simnet
     */
    LDKCurrency_Simnet = 3,
    /**
     * Bitcoin signet
     */
    LDKCurrency_Signet = 4
}
/**
 * Represents an IO Error. Note that some information is lost in the conversion from Rust.
 */
export declare enum IOError {
    LDKIOError_NotFound = 0,
    LDKIOError_PermissionDenied = 1,
    LDKIOError_ConnectionRefused = 2,
    LDKIOError_ConnectionReset = 3,
    LDKIOError_ConnectionAborted = 4,
    LDKIOError_NotConnected = 5,
    LDKIOError_AddrInUse = 6,
    LDKIOError_AddrNotAvailable = 7,
    LDKIOError_BrokenPipe = 8,
    LDKIOError_AlreadyExists = 9,
    LDKIOError_WouldBlock = 10,
    LDKIOError_InvalidInput = 11,
    LDKIOError_InvalidData = 12,
    LDKIOError_TimedOut = 13,
    LDKIOError_WriteZero = 14,
    LDKIOError_Interrupted = 15,
    LDKIOError_Other = 16,
    LDKIOError_UnexpectedEof = 17
}
/**
 * An enum representing the available verbosity levels of the logger.
 */
export declare enum Level {
    /**
     * Designates extremely verbose information, including gossip-induced messages
     */
    LDKLevel_Gossip = 0,
    /**
     * Designates very low priority, often extremely verbose, information
     */
    LDKLevel_Trace = 1,
    /**
     * Designates lower priority information
     */
    LDKLevel_Debug = 2,
    /**
     * Designates useful information
     */
    LDKLevel_Info = 3,
    /**
     * Designates hazardous situations
     */
    LDKLevel_Warn = 4,
    /**
     * Designates very serious errors
     */
    LDKLevel_Error = 5
}
/**
 * An enum representing the possible Bitcoin or test networks which we can run on
 */
export declare enum Network {
    /**
     * The main Bitcoin blockchain.
     */
    LDKNetwork_Bitcoin = 0,
    /**
     * The testnet3 blockchain.
     */
    LDKNetwork_Testnet = 1,
    /**
     * A local test blockchain.
     */
    LDKNetwork_Regtest = 2,
    /**
     * A blockchain on which blocks are signed instead of mined.
     */
    LDKNetwork_Signet = 3
}
/**
 * Specifies the recipient of an invoice, to indicate to [`KeysInterface::sign_invoice`] what node
 * secret key should be used to sign the invoice.
 */
export declare enum Recipient {
    /**
     * The invoice should be signed with the local node secret key.
     */
    LDKRecipient_Node = 0,
    /**
     * The invoice should be signed with the phantom node secret key. This secret key must be the
    same for all nodes participating in the [phantom node payment].
    
    [phantom node payment]: PhantomKeysManager
     */
    LDKRecipient_PhantomNode = 1
}
/**
 * Represents an error returned from libsecp256k1 during validation of some secp256k1 data
 */
export declare enum Secp256k1Error {
    /**
     * Signature failed verification
     */
    LDKSecp256k1Error_IncorrectSignature = 0,
    /**
     * Badly sized message ("messages" are actually fixed-sized digests; see the MESSAGE_SIZE constant)
     */
    LDKSecp256k1Error_InvalidMessage = 1,
    /**
     * Bad public key
     */
    LDKSecp256k1Error_InvalidPublicKey = 2,
    /**
     * Bad signature
     */
    LDKSecp256k1Error_InvalidSignature = 3,
    /**
     * Bad secret key
     */
    LDKSecp256k1Error_InvalidSecretKey = 4,
    /**
     * Bad shared secret.
     */
    LDKSecp256k1Error_InvalidSharedSecret = 5,
    /**
     * Bad recovery id
     */
    LDKSecp256k1Error_InvalidRecoveryId = 6,
    /**
     * Invalid tweak for add_assign or mul_assign
     */
    LDKSecp256k1Error_InvalidTweak = 7,
    /**
     * Didn't pass enough memory to context creation with preallocated memory
     */
    LDKSecp256k1Error_NotEnoughMemory = 8,
    /**
     * Bad set of public keys.
     */
    LDKSecp256k1Error_InvalidPublicKeySum = 9,
    /**
     * The only valid parity values are 0 or 1.
     */
    LDKSecp256k1Error_InvalidParityValue = 10
}
/**
 * Errors that may occur when converting a `RawInvoice` to an `Invoice`. They relate to the
 * requirements sections in BOLT #11
 */
export declare enum SemanticError {
    /**
     * The invoice is missing the mandatory payment hash
     */
    LDKSemanticError_NoPaymentHash = 0,
    /**
     * The invoice has multiple payment hashes which isn't allowed
     */
    LDKSemanticError_MultiplePaymentHashes = 1,
    /**
     * No description or description hash are part of the invoice
     */
    LDKSemanticError_NoDescription = 2,
    /**
     * The invoice contains multiple descriptions and/or description hashes which isn't allowed
     */
    LDKSemanticError_MultipleDescriptions = 3,
    /**
     * The invoice is missing the mandatory payment secret, which all modern lightning nodes
    should provide.
     */
    LDKSemanticError_NoPaymentSecret = 4,
    /**
     * The invoice contains multiple payment secrets
     */
    LDKSemanticError_MultiplePaymentSecrets = 5,
    /**
     * The invoice's features are invalid
     */
    LDKSemanticError_InvalidFeatures = 6,
    /**
     * The recovery id doesn't fit the signature/pub key
     */
    LDKSemanticError_InvalidRecoveryId = 7,
    /**
     * The invoice's signature is invalid
     */
    LDKSemanticError_InvalidSignature = 8,
    /**
     * The invoice's amount was not a whole number of millisatoshis
     */
    LDKSemanticError_ImpreciseAmount = 9
}
/**
 * SI prefixes for the human readable part
 */
export declare enum SiPrefix {
    /**
     * 10^-3
     */
    LDKSiPrefix_Milli = 0,
    /**
     * 10^-6
     */
    LDKSiPrefix_Micro = 1,
    /**
     * 10^-9
     */
    LDKSiPrefix_Nano = 2,
    /**
     * 10^-12
     */
    LDKSiPrefix_Pico = 3
}
