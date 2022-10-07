import { Record } from '../structs/Record.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Logger */
export interface LoggerInterface {
    /**Logs the `Record`
     */
    log(record: Record): void;
}
/**
 * A trait encapsulating the operations required of a logger
 */
export declare class Logger extends CommonBase {
    /** Creates a new instance of Logger from a given implementation */
    static new_impl(arg: LoggerInterface): Logger;
}