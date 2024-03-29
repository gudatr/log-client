export default class LogClient {
    private name;
    loggerAdress: string;
    reconnect: boolean;
    reconnectIntervalMs: number;
    rejectUnauthorized: boolean;
    perMessageDeflate: boolean | undefined;
    onClose: ((logger: LogClient, code: number) => void) | undefined;
    onError: ((logger: LogClient, error: Error) => void) | undefined;
    private webSocket;
    constructor(name: string, loggerAdress: string, reconnect?: boolean, reconnectIntervalMs?: number, rejectUnauthorized?: boolean, perMessageDeflate?: boolean | undefined, onClose?: ((logger: LogClient, code: number) => void) | undefined, onError?: ((logger: LogClient, error: Error) => void) | undefined);
    /**
     * Starts the predefined metrics logger, which is designed to work with gudatr/log-server
     * You should start the metrics logging only on one thread per application
     */
    startMetrics(interval?: number): void;
    /**
     * Dispatches a metrics log entry containing
     * - CPU Load average for the last minute
     * - RAM used percentage
     * - Read IO per second
     * - Write IO per second
     * - Disk usage percentage
     * - Network read MB per second
     * - Network write MB per second
     */
    sendMetrics(): Promise<void>;
    open(): boolean;
    /**
     * Initializes the websocket connection
     * @param passphrase - the passphrase for the logging endpoint
     * @param rejectUnauthorized - if wss is chosen, determines if self-signed certificates, etc. will be rejected
     * @param perMessageDeflate - enables per message deflate if the server also supports it
     * @throws if the logger address is invalid
     * @returns
     */
    start(passphrase: string, rejectUnauthorized: boolean, perMessageDeflate: boolean | undefined): void;
    /**
     * Log a message with the provided parameters
     * @param level The message's level ranging from 1 to 6 where 1 is the least and 6 the most important
     * @param channel A channel name to group messages by on the server side, shoud not contain apostrophes
     * @param message The message itself, shoud not contain apostrophes
     * @param data Data to provide context for the message
     * @returns
     */
    log(level: 1 | 2 | 3 | 4 | 5 | 6, channel: string, message: string, data?: object | string | undefined): void;
}
