declare module 'efront-downloader/app/modules/auth' {
	export default class Auth {
	    headers: HEADERS;
	    constructor(headers: HEADERS);
	    getHeaders(): {
	        'Cookie': any;
	    };
	}
	export interface HEADERS {
	    PHPSESSID: string;
	}

}
declare module 'efront-downloader/app/modules/crawler' {
	import Auth from 'efront-downloader/app/modules/auth';
	export interface JQ extends Cheerio {
	}
	export default class Crawler {
	    url: string;
	    private pageDom;
	    auth: Auth;
	    constructor(url: string, auth?: Auth);
	    getPage(): Promise<JQ>;
	}

}
declare module 'efront-downloader/app/modules/auth-fetcher' {
	import { default as Auth } from 'efront-downloader/app/modules/auth';
	export default class AuthFetcher {
	    private baseUrl;
	    private username;
	    private password;
	    private crawler;
	    private url;
	    private auth;
	    constructor(baseUrl: string, username: string, password: string);
	    fetchAuth(): Promise<Auth>;
	}

}
declare module 'efront-downloader/app/modules/unit-crawler' {
	import { default as Crawler, JQ } from 'efront-downloader/app/modules/crawler';
	import Auth from 'efront-downloader/app/modules/auth';
	export default class UnitCrawler extends Crawler {
	    private content;
	    constructor(url: string, auth: Auth);
	    getContent(): Promise<JQ>;
	}

}
declare module 'efront-downloader/app/modules/page-downloader' {
	import Auth from 'efront-downloader/app/modules/auth';
	export default class PageDownloader {
	    protected url: string;
	    private downloadDirectory;
	    private defaultFilename;
	    private auth;
	    private htmlPath;
	    private pdfPath;
	    constructor(url: string, downloadDirectory: string, defaultFilename: string, auth?: Auth);
	    private getHeaders();
	    downloadPDF(): Promise<any>;
	    download(): Promise<any>;
	}

}
declare module 'efront-downloader/app/modules/unit' {
	import Auth from 'efront-downloader/app/modules/auth';
	export default class Unit {
	    private code;
	    private url;
	    private pageDownloader;
	    constructor(code: number, baseUrl: string, auth: Auth);
	    downloadPage(): Promise<any>;
	    downloadPDF(): Promise<any>;
	}

}
declare module 'efront-downloader/app/modules/units-crawler' {
	import { default as Crawler } from 'efront-downloader/app/modules/crawler';
	import { default as Unit } from 'efront-downloader/app/modules/unit';
	import Auth from 'efront-downloader/app/modules/auth';
	export default class UnitsCrawler extends Crawler {
	    protected baseUrl: string;
	    constructor(baseUrl: string, course: number, auth: Auth);
	    getUnitsNumberFromRange(start: number, end: number): Promise<number[]>;
	    getUnits(units: number[]): Unit[];
	    getUnitsFromRange(start: number, end: number): Promise<Unit[]>;
	}

}
declare module 'efront-downloader/app/modules/pdf' {
	export default class PDF {
	    private paths;
	    private pdfMerge;
	    constructor(paths: string[]);
	    join(out: string): Promise<string>;
	}

}
declare module 'efront-downloader/app/modules/app' {
	export default class App {
	    private baseUrl;
	    private username;
	    private password;
	    private course;
	    private startUnit;
	    private endUnit;
	    private outDirectory;
	    private authFetcher;
	    private unitsCrawler;
	    private auth;
	    private units;
	    private pdf;
	    constructor(baseUrl: string, username: string, password: string, course: number, startUnit: number, endUnit: number, outDirectory: string);
	    run(): Promise<string>;
	}

}
declare module 'efront-downloader/app/modules/tools' {
	export default class Tools {
	    static getUrlArgument(url: string, argument: string): string;
	}

}
declare module 'website-scraper' {
  interface OPTIONS {
    urls: string[];
    directory: string;
    defaultFilename? : string;
    subdirectories?: Object[];
    request?: Object;
    recursive?: boolean;
    maxDepth?: number;
  }

  interface RESULT {
    url: string;
    filename: string;
  }

  export function scrape(options : OPTIONS, callback : (error : Error, result: RESULT[]) => any) : void;
}
declare module 'pdf-merge' {

  class PDFMerge {
    constructor(files: string[], pdftkPath : string);
    asNewFile(path: string) : PDFMerge;
    promise() : Promise<string>;
  }

  module PDFMerge {

  }

  export = PDFMerge;
}
// Type definitions for Cheerio v0.17.0
// Project: https://github.com/cheeriojs/cheerio
// Definitions by: Bret Little <https://github.com/blittle>, VILIC VANE <http://vilic.info>, Wayne Maurer <https://github.com/wmaurer>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Cheerio {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com

    [index: number]: CheerioElement;
    length: number;

    // Attributes

    attr(name: string): string;
    attr(name: string, value: any): Cheerio;

    data(): any;
    data(name: string): any;
    data(name: string, value: any): any;

    val(): string;
    val(value: string): Cheerio;

    removeAttr(name: string): Cheerio;

    has(selector: string): Cheerio;
    has(element: CheerioElement): Cheerio;

    hasClass(className: string): boolean;
    addClass(classNames: string): Cheerio;

    removeClass(): Cheerio;
    removeClass(className: string): Cheerio;
    removeClass(func: (index: number, className: string) => string): Cheerio;

    toggleClass(className: string): Cheerio;
    toggleClass(className: string, toggleSwitch: boolean): Cheerio;
    toggleClass(toggleSwitch?: boolean): Cheerio;
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Cheerio;

    is(selector: string): boolean;
    is(element: CheerioElement): boolean;
    is(element: CheerioElement[]): boolean;
    is(selection: Cheerio): boolean;
    is(func: (index: number, element: CheerioElement) => boolean): boolean;

    // Form
    serializeArray(): {name: string, value: string}[];

    // Traversing

    find(selector: string): Cheerio;
    find(element: Cheerio): Cheerio;

    parent(selector?: string): Cheerio;
    parents(selector?: string): Cheerio;
    parentsUntil(selector?: string, filter?: string): Cheerio;
    parentsUntil(element: CheerioElement, filter?: string): Cheerio;
    parentsUntil(element: Cheerio, filter?: string): Cheerio;

    closest(): Cheerio;
    closest(selector: string): Cheerio;

    next(selector?: string): Cheerio;
    nextAll(): Cheerio;
    nextAll(selector: string): Cheerio;

    nextUntil(selector?: string, filter?: string): Cheerio;
    nextUntil(element: CheerioElement, filter?: string): Cheerio;
    nextUntil(element: Cheerio, filter?: string): Cheerio;

    prev(selector?: string): Cheerio;
    prevAll(): Cheerio;
    prevAll(selector: string): Cheerio;

    prevUntil(selector?: string, filter?: string): Cheerio;
    prevUntil(element: CheerioElement, filter?: string): Cheerio;
    prevUntil(element: Cheerio, filter?: string): Cheerio;

    slice(start: number, end?: number): Cheerio;

    siblings(selector?: string): Cheerio;

    children(selector?: string): Cheerio;

    contents(): Cheerio;

    each(func: (index: number, element: CheerioElement) => any): Cheerio;
    map(func: (index: number, element: CheerioElement) => any): Cheerio;

    filter(selector: string): Cheerio;
    filter(selection: Cheerio): Cheerio;
    filter(element: CheerioElement): Cheerio;
    filter(elements: CheerioElement[]): Cheerio;
    filter(func: (index: number, element: CheerioElement) => boolean): Cheerio;

    not(selector: string): Cheerio;
    not(selection: Cheerio): Cheerio;
    not(element: CheerioElement): Cheerio;
    not(func: (index: number, element: CheerioElement) => boolean): Cheerio;

    first(): Cheerio;
    last(): Cheerio;

    eq(index: number): Cheerio;

    get(): CheerioElement[];
    get(index: number): CheerioElement;

    index(): number;
    index(selector: string): number;
    index(selection: Cheerio): number;

    end(): Cheerio;

    add(selectorOrHtml: string): Cheerio;
    add(selector: string, context: Document): Cheerio;
    add(element: CheerioElement): Cheerio;
    add(elements: CheerioElement[]): Cheerio;
    add(selection: Cheerio): Cheerio;

    addBack():Cheerio;
    addBack(filter: string):Cheerio;

    // Manipulation

    append(content: string, ...contents: any[]): Cheerio;
    append(content: Document, ...contents: any[]): Cheerio;
    append(content: Document[], ...contents: any[]): Cheerio;
    append(content: Cheerio, ...contents: any[]): Cheerio;

    prepend(content: string, ...contents: any[]): Cheerio;
    prepend(content: Document, ...contents: any[]): Cheerio;
    prepend(content: Document[], ...contents: any[]): Cheerio;
    prepend(content: Cheerio, ...contents: any[]): Cheerio;

    after(content: string, ...contents: any[]): Cheerio;
    after(content: Document, ...contents: any[]): Cheerio;
    after(content: Document[], ...contents: any[]): Cheerio;
    after(content: Cheerio, ...contents: any[]): Cheerio;

    insertAfter(content: string): Cheerio;
    insertAfter(content: Document): Cheerio;
    insertAfter(content: Cheerio): Cheerio;

    before(content: string, ...contents: any[]): Cheerio;
    before(content: Document, ...contents: any[]): Cheerio;
    before(content: Document[], ...contents: any[]): Cheerio;
    before(content: Cheerio, ...contents: any[]): Cheerio;

    insertBefore(content: string): Cheerio;
    insertBefore(content: Document): Cheerio;
    insertBefore(content: Cheerio): Cheerio;

    remove(selector?: string): Cheerio;

    replaceWith(content: string): Cheerio;
    replaceWith(content: CheerioElement): Cheerio;
    replaceWith(content: CheerioElement[]): Cheerio;
    replaceWith(content: Cheerio): Cheerio;

    empty(): Cheerio;

    html(): string;
    html(html: string): Cheerio;

    text(): string;
    text(text: string): Cheerio;

    // See https://github.com/cheeriojs/cheerio/issues/731
    /*wrap(content: string): Cheerio;
    wrap(content: Document): Cheerio;
    wrap(content: Cheerio): Cheerio;*/

    css(propertyName: string): string;
    css(propertyNames: string[]): string[];
    css(propertyName: string, value: string): Cheerio;
    css(propertyName: string, value: number): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => string): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => number): Cheerio;
    css(properties: Object): Cheerio;

    // Rendering

    // Miscellaneous

    clone(): Cheerio;

    // Not Documented

    toArray(): CheerioElement[];
}

interface CheerioOptionsInterface {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
    // DomHandler https://github.com/fb55/DomHandler

    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
}

interface CheerioSelector {
    (selector: string): Cheerio;
    (selector: string, context: string): Cheerio;
    (selector: string, context: CheerioElement): Cheerio;
    (selector: string, context: CheerioElement[]): Cheerio;
    (selector: string, context: Cheerio): Cheerio;
    (selector: string, context: string, root: string): Cheerio;
    (selector: string, context: CheerioElement, root: string): Cheerio;
    (selector: string, context: CheerioElement[], root: string): Cheerio;
    (selector: string, context: Cheerio, root: string): Cheerio;
    (selector: any): Cheerio;
}

interface CheerioStatic extends CheerioSelector {
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com
    xml(): string;
    root(): Cheerio;
    contains(container: CheerioElement, contained: CheerioElement): boolean;
    parseHTML(data: string, context?: Document, keepScripts?: boolean): Document[];

    html(options?: CheerioOptionsInterface): string;
    html(selector: string, options?: CheerioOptionsInterface): string;
    html(element: Cheerio, options?: CheerioOptionsInterface): string;
    html(element: CheerioElement, options?: CheerioOptionsInterface): string;
}

interface CheerioElement {
    // Document References
    // Node Console
    tagName: string;
    type: string;
    name: string;
    attribs: Object;
    children: CheerioElement[];
    childNodes: CheerioElement[];
    lastChild: CheerioElement;
    next: CheerioElement;
    nextSibling: CheerioElement;
    prev: CheerioElement;
    previousSibling: CheerioElement;
    parent: CheerioElement;
    parentNode: CheerioElement;
    nodeValue: string;
}

interface CheerioAPI extends CheerioSelector {
  load(html: string, options?: CheerioOptionsInterface): CheerioStatic;
}

declare var cheerio:CheerioAPI;

declare module "cheerio" {
    export = cheerio;
}
// Type definitions for es6-promise
// Project: https://github.com/jakearchibald/ES6-Promise
// Definitions by: François de Campredon <https://github.com/fdecampredon/>, vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Thenable<R> {
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
    catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}

declare class Promise<R> implements Thenable<R> {
	/**
	 * If you call resolve in the body of the callback passed to the constructor,
	 * your promise is fulfilled with result object passed to resolve.
	 * If you call reject your promise is rejected with the object passed to reject.
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
	constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

	/**
	 * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
	 * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason.
	 * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 *
	 * @param onFulfilled called when/if "promise" resolves
	 * @param onRejected called when/if "promise" rejects
	 */
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

	/**
	 * Sugar for promise.then(undefined, onRejected)
	 *
	 * @param onRejected called when/if "promise" rejects
	 */
	catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
}

declare module Promise {
	/**
	 * Make a new promise from the thenable.
	 * A thenable is promise-like in as far as it has a "then" method.
	 */
	function resolve<R>(value?: R | Thenable<R>): Promise<R>;

	/**
	 * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
	 */
	function reject(error: any): Promise<any>;

	/**
	 * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * the array passed to all can be a mixture of promise-like objects and other objects.
	 * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
	 */
	function all<R>(promises: (R | Thenable<R>)[]): Promise<R[]>;

	/**
	 * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
	 */
	function race<R>(promises: (R | Thenable<R>)[]): Promise<R>;
}

declare module 'es6-promise' {
	var foo: typeof Promise; // Temp variable to reference Promise in local context
	module rsvp {
		export var Promise: typeof foo;
	}
	export = rsvp;
}
// Type definitions for Node.js v4.x
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/borisyankov/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v4.x API                *
*                                               *
************************************************/

interface Error {
    stack?: string;
}


// compat for TypeScript 1.5.3
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.5.3.
interface MapConstructor {}
interface WeakMapConstructor {}
interface SetConstructor {}
interface WeakSetConstructor {}

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: NodeJS.Global;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var require: NodeRequire;

interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

declare var module: NodeModule;

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (size: Uint8Array): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};


// Buffer class
interface Buffer extends NodeBuffer {}

/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare var Buffer: {
    /**
     * Allocates a new buffer containing the given {str}.
     *
     * @param str String to store in buffer.
     * @param encoding encoding to use, optional.  Default is 'utf8'
     */
    new (str: string, encoding?: string): Buffer;
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     */
    new (size: number): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: Uint8Array): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: any[]): Buffer;
    /**
     * Copies the passed {buffer} data onto a new {Buffer} instance.
     *
     * @param buffer The buffer to copy.
     */
    new (buffer: Buffer): Buffer;
    prototype: Buffer;
    /**
     * Returns true if {obj} is a Buffer
     *
     * @param obj object to test.
     */
    isBuffer(obj: any): obj is Buffer;
    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     *
     * @param encoding string to test.
     */
    isEncoding(encoding: string): boolean;
    /**
     * Gives the actual byte length of a string. encoding defaults to 'utf8'.
     * This is not the same as String.prototype.length since that returns the number of characters in a string.
     *
     * @param string string to test.
     * @param encoding encoding used to evaluate (defaults to 'utf8')
     */
    byteLength(string: string, encoding?: string): number;
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     *
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     *
     * @param list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     */
    concat(list: Buffer[], totalLength?: number): Buffer;
    /**
     * The same as buf1.compare(buf2).
     */
    compare(buf1: Buffer, buf2: Buffer): number;
};

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare module NodeJS {
    export interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

    export interface EventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): EventEmitter;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }

    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string|Buffer;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer|string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface ReadWriteStream extends ReadableStream, WritableStream {}

    export interface Process extends EventEmitter {
        stdout: WritableStream;
        stderr: WritableStream;
        stdin: ReadableStream;
        argv: string[];
        execPath: string;
        abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        env: any;
        exit(code?: number): void;
        getgid(): number;
        setgid(id: number): void;
        setgid(id: string): void;
        getuid(): number;
        setuid(id: number): void;
        setuid(id: string): void;
        version: string;
        versions: {
            http_parser: string;
            node: string;
            v8: string;
            ares: string;
            uv: string;
            zlib: string;
            openssl: string;
        };
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid:number, signal?: string|number): void;
        pid: number;
        title: string;
        arch: string;
        platform: string;
        memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
        nextTick(callback: Function): void;
        umask(mask?: number): number;
        uptime(): number;
        hrtime(time?:number[]): number[];

        // Worker
        send?(message: any, sendHandle?: any): void;
    }

    export interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: any) => void;
        clearInterval: (intervalId: NodeJS.Timer) => void;
        clearTimeout: (timeoutId: NodeJS.Timer) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        process: Process;
        root: Global;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }

    export interface Timer {
        ref() : void;
        unref() : void;
    }
}

/**
 * @deprecated
 */
interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    toJSON(): any;
    length: number;
    equals(otherBuffer: Buffer): boolean;
    compare(otherBuffer: Buffer): number;
    copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): Buffer;
    writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt8(value: number, offset: number, noAssert?: boolean): number;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
    fill(value: any, offset?: number, end?: number): Buffer;
    indexOf(value: string | number | Buffer, byteOffset?: number): number;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    export var INSPECT_MAX_BYTES: number;
}

declare module "querystring" {
    export interface StringifyOptions {
        encodeURIComponent?: Function;
    }

    export interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: Function;
    }

    export function stringify<T>(obj: T, sep?: string, eq?: string, options?: StringifyOptions): string;
    export function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): any;
    export function parse<T extends {}>(str: string, sep?: string, eq?: string, options?: ParseOptions): T;
    export function escape(str: string): string;
    export function unescape(str: string): string;
}

declare module "events" {
    export class EventEmitter implements NodeJS.EventEmitter {
        static EventEmitter: EventEmitter;
        static listenerCount(emitter: EventEmitter, event: string): number; // deprecated
        static defaultMaxListeners: number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): EventEmitter;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}

declare module "http" {
    import * as events from "events";
    import * as net from "net";
    import * as stream from "stream";

    export interface RequestOptions {
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number;
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: { [key: string]: any };
        auth?: string;
        agent?: Agent|boolean;
    }

    export interface Server extends events.EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
        listen(port: number, hostname?: string, callback?: Function): Server;
        listen(path: string, callback?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(cb?: any): Server;
        address(): { port: number; family: string; address: string; };
        maxHeadersCount: number;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ServerRequest extends IncomingMessage {
        connection: net.Socket;
    }
    export interface ServerResponse extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        statusMessage: string;
        headersSent: boolean;
        setHeader(name: string, value: string): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface ClientRequest extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface IncomingMessage extends events.EventEmitter, stream.Readable {
        httpVersion: string;
        headers: any;
        rawHeaders: string[];
        trailers: any;
        rawTrailers: any;
        setTimeout(msecs: number, callback: Function): NodeJS.Timer;
        /**
         * Only valid for request obtained from http.Server.
         */
        method?: string;
        /**
         * Only valid for request obtained from http.Server.
         */
        url?: string;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode?: number;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage?: string;
        socket: net.Socket;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ClientResponse extends IncomingMessage { }

	export interface AgentOptions {
		/**
		 * Keep sockets around in a pool to be used by other requests in the future. Default = false
		 */
		keepAlive?: boolean;
		/**
		 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
		 * Only relevant if keepAlive is set to true.
		 */
		keepAliveMsecs?: number;
		/**
		 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
		 */
		maxSockets?: number;
		/**
		 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
		 */
		maxFreeSockets?: number;
	}

    export class Agent {
		maxSockets: number;
		sockets: any;
		requests: any;

		constructor(opts?: AgentOptions);

		/**
		 * Destroy any sockets that are currently in use by the agent.
		 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
		 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
		 * sockets may hang open for quite a long time before the server terminates them.
		 */
		destroy(): void;
	}

    export var METHODS: string[];

    export var STATUS_CODES: {
        [errorCode: number]: string;
        [errorCode: string]: string;
    };
    export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) =>void ): Server;
    export function createClient(port?: number, host?: string): any;
    export function request(options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest;
    export var globalAgent: Agent;
}

declare module "cluster" {
    import * as child from "child_process";
    import * as events from "events";

    export interface ClusterSettings {
        exec?: string;
        args?: string[];
        silent?: boolean;
    }

    export class Worker extends events.EventEmitter {
        id: string;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
    }

    export var settings: ClusterSettings;
    export var isMaster: boolean;
    export var isWorker: boolean;
    export function setupMaster(settings?: ClusterSettings): void;
    export function fork(env?: any): Worker;
    export function disconnect(callback?: Function): void;
    export var worker: Worker;
    export var workers: Worker[];

    // Event emitter
    export function addListener(event: string, listener: Function): void;
    export function on(event: "disconnect", listener: (worker: Worker) => void): void;
    export function on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): void;
    export function on(event: "fork", listener: (worker: Worker) => void): void;
    export function on(event: "listening", listener: (worker: Worker, address: any) => void): void;
    export function on(event: "message", listener: (worker: Worker, message: any) => void): void;
    export function on(event: "online", listener: (worker: Worker) => void): void;
    export function on(event: "setup", listener: (settings: any) => void): void;
    export function on(event: string, listener: Function): any;
    export function once(event: string, listener: Function): void;
    export function removeListener(event: string, listener: Function): void;
    export function removeAllListeners(event?: string): void;
    export function setMaxListeners(n: number): void;
    export function listeners(event: string): Function[];
    export function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {
    import * as stream from "stream";
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends stream.Transform { }
    export interface Gunzip extends stream.Transform { }
    export interface Deflate extends stream.Transform { }
    export interface Inflate extends stream.Transform { }
    export interface DeflateRaw extends stream.Transform { }
    export interface InflateRaw extends stream.Transform { }
    export interface Unzip extends stream.Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "os" {
    export interface CpuInfo {
        model: string;
        speed: number;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
    }

    export interface NetworkInterfaceInfo {
        address: string;
        netmask: string;
        family: string;
        mac: string;
        internal: boolean;
    }

    export function tmpdir(): string;
    export function homedir(): string;
    export function endianness(): string;
    export function hostname(): string;
    export function type(): string;
    export function platform(): string;
    export function arch(): string;
    export function release(): string;
    export function uptime(): number;
    export function loadavg(): number[];
    export function totalmem(): number;
    export function freemem(): number;
    export function cpus(): CpuInfo[];
    export function networkInterfaces(): {[index: string]: NetworkInterfaceInfo[]};
    export var EOL: string;
}

declare module "https" {
    import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";

    export interface ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }

    export interface RequestOptions extends http.RequestOptions{
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }

    export interface Agent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    export var Agent: {
        new (options?: RequestOptions): Agent;
    };
    export interface Server extends tls.Server { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export function get(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export var globalAgent: Agent;
}

declare module "punycode" {
    export function decode(string: string): string;
    export function encode(string: string): string;
    export function toUnicode(domain: string): string;
    export function toASCII(domain: string): string;
    export var ucs2: ucs2;
    interface ucs2 {
        decode(string: string): number[];
        encode(codePoints: number[]): string;
    }
    export var version: any;
}

declare module "repl" {
    import * as stream from "stream";
    import * as events from "events";

    export interface ReplOptions {
        prompt?: string;
        input?: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    export function start(options: ReplOptions): events.EventEmitter;
}

declare module "readline" {
    import * as events from "events";
    import * as stream from "stream";

    export interface Key {
        sequence?: string;
        name?: string;
        ctrl?: boolean;
        meta?: boolean;
        shift?: boolean;
    }

    export interface ReadLine extends events.EventEmitter {
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: (answer: string) => void): void;
        pause(): ReadLine;
        resume(): ReadLine;
        close(): void;
        write(data: string|Buffer, key?: Key): void;
    }

    export interface Completer {
        (line: string): CompleterResult;
        (line: string, callback: (err: any, result: CompleterResult) => void): any;
    }

    export interface CompleterResult {
        completions: string[];
        line: string;
    }

    export interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        completer?: Completer;
        terminal?: boolean;
        historySize?: number;
    }

    export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
    export function createInterface(options: ReadLineOptions): ReadLine;

    export function cursorTo(stream: NodeJS.WritableStream, x: number, y: number): void;
    export function moveCursor(stream: NodeJS.WritableStream, dx: number|string, dy: number|string): void;
    export function clearLine(stream: NodeJS.WritableStream, dir: number): void;
    export function clearScreenDown(stream: NodeJS.WritableStream): void;
}

declare module "vm" {
    export interface Context { }
    export interface Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    export function runInThisContext(code: string, filename?: string): void;
    export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    export function runInContext(code: string, context: Context, filename?: string): void;
    export function createContext(initSandbox?: Context): Context;
    export function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {
    import * as events from "events";
    import * as stream from "stream";

    export interface ChildProcess extends events.EventEmitter {
        stdin:  stream.Writable;
        stdout: stream.Readable;
        stderr: stream.Readable;
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle?: any): void;
        disconnect(): void;
        unref(): void;
    }

    export function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function exec(command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string,
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[],
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        execPath?: string;
        execArgv?: string[];
        silent?: boolean;
        uid?: number;
        gid?: number;
    }): ChildProcess;
    export function spawnSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): {
        pid: number;
        output: string[];
        stdout: string | Buffer;
        stderr: string | Buffer;
        status: number;
        signal: string;
        error: Error;
    };
    export function execSync(command: string, options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
    export function execFileSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
}

declare module "url" {
    export interface Url {
        href?: string;
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any; // string | Object
        slashes?: boolean;
        hash?: string;
        path?: string;
    }

    export function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;
}

declare module "dns" {
    export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
    export function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
    export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module "net" {
    import * as stream from "stream";

    export interface Socket extends stream.Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remoteFamily: string;
        remotePort: number;
        localAddress: string;
        localPort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }

    export var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): Socket;
    };

    export interface Server extends Socket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    export function createServer(connectionListener?: (socket: Socket) =>void ): Server;
    export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) =>void ): Server;
    export function connect(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function connect(port: number, host?: string, connectionListener?: Function): Socket;
    export function connect(path: string, connectionListener?: Function): Socket;
    export function createConnection(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
    export function createConnection(path: string, connectionListener?: Function): Socket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}

declare module "dgram" {
    import * as events from "events";

    interface RemoteInfo {
        address: string;
        port: number;
        size: number;
    }

    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

    interface Socket extends events.EventEmitter {
        send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        bind(port: number, address?: string, callback?: () => void): void;
        close(): void;
        address(): AddressInfo;
        setBroadcast(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
    }
}

declare module "fs" {
    import * as stream from "stream";
    import * as events from "events";

    interface Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    interface FSWatcher extends events.EventEmitter {
        close(): void;
    }

    export interface ReadStream extends stream.Readable {
        close(): void;
    }
    export interface WriteStream extends stream.Writable {
        close(): void;
        bytesWritten: number;
    }

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rename
     * @param oldPath
     * @param newPath
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncateSync(path: string, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chownSync(path: string, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchownSync(path: string, uid: number, gid: number): void;
    export function chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmodSync(path: string, mode: number): void;
    export function chmodSync(path: string, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmodSync(path: string, mode: number): void;
    export function lchmodSync(path: string, mode: string): void;
    export function stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string): Stats;
    export function lstatSync(path: string): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function linkSync(srcpath: string, dstpath: string): void;
    export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    export function readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string): string;
    export function realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) =>any): void;
    export function realpathSync(path: string, cache?: { [path: string]: string }): string;
    /*
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous unlink - deletes the file specified in {path}
     *
     * @param path
     */
    export function unlinkSync(path: string): void;
    /*
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     */
    export function rmdirSync(path: string): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: number): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: string): void;
    export function readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string): string[];
    export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function openSync(path: string, flags: string, mode?: number): number;
    export function openSync(path: string, flags: string, mode?: string): number;
    export function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimesSync(path: string, atime: number, mtime: number): void;
    export function utimesSync(path: string, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     */
    export function readFileSync(filename: string, encoding: string): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    export function exists(path: string, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string): boolean;
    /** Constant for fs.access(). File is visible to the calling process. */
    export var F_OK: number;
    /** Constant for fs.access(). File can be read by the calling process. */
    export var R_OK: number;
    /** Constant for fs.access(). File can be written by the calling process. */
    export var W_OK: number;
    /** Constant for fs.access(). File can be executed by the calling process. */
    export var X_OK: number;
    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function access(path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string, mode ?: number): void;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
    }): ReadStream;
    export function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
    }): WriteStream;
}

declare module "path" {

    /**
     * A parsed path object generated by path.parse() or consumed by path.format().
     */
    export interface ParsedPath {
        /**
         * The root of the path such as '/' or 'c:\'
         */
        root: string;
        /**
         * The full directory path such as '/home/user/dir' or 'c:\path\dir'
         */
        dir: string;
        /**
         * The file name including extension (if any) such as 'index.html'
         */
        base: string;
        /**
         * The file extension (if any) such as '.html'
         */
        ext: string;
        /**
         * The file name without extension (if any) such as 'index'
         */
        name: string;
    }

    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     *
     * @param p string path to normalize.
     */
    export function normalize(p: string): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: any[]): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: string[]): string;
    /**
     * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
     *
     * Starting from leftmost {from} paramter, resolves {to} to an absolute path.
     *
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
     *
     * @param pathSegments string paths to join.  Non-string arguments are ignored.
     */
    export function resolve(...pathSegments: any[]): string;
    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     *
     * @param path path to test.
     */
    export function isAbsolute(path: string): boolean;
    /**
     * Solve the relative path from {from} to {to}.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     *
     * @param from
     * @param to
     */
    export function relative(from: string, to: string): string;
    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     *
     * @param p the path to evaluate.
     */
    export function dirname(p: string): string;
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     *
     * @param p the path to evaluate.
     * @param ext optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string): string;
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     *
     * @param p the path to evaluate.
     */
    export function extname(p: string): string;
    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    export var sep: string;
    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    export var delimiter: string;
    /**
     * Returns an object from a path string - the opposite of format().
     *
     * @param pathString path to evaluate.
     */
    export function parse(pathString: string): ParsedPath;
    /**
     * Returns a path string from an object - the opposite of parse().
     *
     * @param pathString path to evaluate.
     */
    export function format(pathObject: ParsedPath): string;

    export module posix {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }

    export module win32 {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }
}

declare module "string_decoder" {
    export interface NodeStringDecoder {
        write(buffer: Buffer): string;
        detectIncompleteChar(buffer: Buffer): number;
    }
    export var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "tls" {
    import * as crypto from "crypto";
    import * as net from "net";
    import * as stream from "stream";

    var CLIENT_RENEG_LIMIT: number;
    var CLIENT_RENEG_WINDOW: number;

    export interface TlsOptions {
        host?: string;
        port?: number;
        pfx?: any;   //string or buffer
        key?: any;   //string or buffer
        passphrase?: string;
        cert?: any;
        ca?: any;    //string or buffer
        crl?: any;   //string or string array
        ciphers?: string;
        honorCipherOrder?: any;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //array or Buffer;
        SNICallback?: (servername: string) => any;
    }

    export interface ConnectionOptions {
        host?: string;
        port?: number;
        socket?: net.Socket;
        pfx?: any;   //string | Buffer
        key?: any;   //string | Buffer
        passphrase?: string;
        cert?: any;  //string | Buffer
        ca?: any;    //Array of string | Buffer
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //Array of string | Buffer
        servername?: string;
    }

    export interface Server extends net.Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;

        listen(port: number, host?: string, callback?: Function): Server;
        close(): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    export interface ClearTextStream extends stream.Duplex {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }

    export interface SecurePair {
        encrypted: any;
        cleartext: any;
    }

    export interface SecureContextOptions {
        pfx?: any;   //string | buffer
        key?: any;   //string | buffer
        passphrase?: string;
        cert?: any;  // string | buffer
        ca?: any;    // string | buffer
        crl?: any;   // string | string[]
        ciphers?: string;
        honorCipherOrder?: boolean;
    }

    export interface SecureContext {
        context: any;
    }

    export function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
    export function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
    export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    export function createSecureContext(details: SecureContextOptions): SecureContext;
}

declare module "crypto" {
    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    export function createHmac(algorithm: string, key: Buffer): Hmac;
    export interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export interface Hmac extends NodeJS.ReadWriteStream {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    export interface Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    export interface Decipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createSign(algorithm: string): Signer;
    export interface Signer extends NodeJS.WritableStream {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    export function createVerify(algorith: string): Verify;
    export interface Verify extends NodeJS.WritableStream {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    export interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number) : Buffer;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string) : Buffer;
    export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
}

declare module "stream" {
    import * as events from "events";

    export class Stream extends events.EventEmitter {
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    export interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    export interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
        objectMode?: boolean;
    }

    export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    export class Duplex extends Readable implements NodeJS.ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface TransformOptions extends ReadableOptions, WritableOptions {}

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    export class Transform extends events.EventEmitter implements NodeJS.ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions);
        _transform(chunk: any, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export class PassThrough extends Transform {}
}

declare module "util" {
    export interface InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isError(object: any): boolean;
    export function inherits(constructor: any, superConstructor: any): void;
    export function debuglog(key:string): (msg:string,...param: any[])=>void;
}

declare module "assert" {
    function internal (value: any, message?: string): void;
    module internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {message?: string; actual?: any; expected?: any;
                                  operator?: string; stackStartFunction?: Function});
        }

        export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(acutal: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export function deepStrictEqual(actual: any, expected: any, message?: string): void;
        export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export function ifError(value: any): void;
    }

    export = internal;
}

declare module "tty" {
    import * as net from "net";

    export function isatty(fd: number): boolean;
    export interface ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    export interface WriteStream extends net.Socket {
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}

declare module "domain" {
    import * as events from "events";

    export class Domain extends events.EventEmitter {
        run(fn: Function): void;
        add(emitter: events.EventEmitter): void;
        remove(emitter: events.EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): Domain;
        on(event: string, listener: Function): Domain;
        once(event: string, listener: Function): Domain;
        removeListener(event: string, listener: Function): Domain;
        removeAllListeners(event?: string): Domain;
    }

    export function create(): Domain;
}

declare module "constants" {
    export var E2BIG: number;
    export var EACCES: number;
    export var EADDRINUSE: number;
    export var EADDRNOTAVAIL: number;
    export var EAFNOSUPPORT: number;
    export var EAGAIN: number;
    export var EALREADY: number;
    export var EBADF: number;
    export var EBADMSG: number;
    export var EBUSY: number;
    export var ECANCELED: number;
    export var ECHILD: number;
    export var ECONNABORTED: number;
    export var ECONNREFUSED: number;
    export var ECONNRESET: number;
    export var EDEADLK: number;
    export var EDESTADDRREQ: number;
    export var EDOM: number;
    export var EEXIST: number;
    export var EFAULT: number;
    export var EFBIG: number;
    export var EHOSTUNREACH: number;
    export var EIDRM: number;
    export var EILSEQ: number;
    export var EINPROGRESS: number;
    export var EINTR: number;
    export var EINVAL: number;
    export var EIO: number;
    export var EISCONN: number;
    export var EISDIR: number;
    export var ELOOP: number;
    export var EMFILE: number;
    export var EMLINK: number;
    export var EMSGSIZE: number;
    export var ENAMETOOLONG: number;
    export var ENETDOWN: number;
    export var ENETRESET: number;
    export var ENETUNREACH: number;
    export var ENFILE: number;
    export var ENOBUFS: number;
    export var ENODATA: number;
    export var ENODEV: number;
    export var ENOENT: number;
    export var ENOEXEC: number;
    export var ENOLCK: number;
    export var ENOLINK: number;
    export var ENOMEM: number;
    export var ENOMSG: number;
    export var ENOPROTOOPT: number;
    export var ENOSPC: number;
    export var ENOSR: number;
    export var ENOSTR: number;
    export var ENOSYS: number;
    export var ENOTCONN: number;
    export var ENOTDIR: number;
    export var ENOTEMPTY: number;
    export var ENOTSOCK: number;
    export var ENOTSUP: number;
    export var ENOTTY: number;
    export var ENXIO: number;
    export var EOPNOTSUPP: number;
    export var EOVERFLOW: number;
    export var EPERM: number;
    export var EPIPE: number;
    export var EPROTO: number;
    export var EPROTONOSUPPORT: number;
    export var EPROTOTYPE: number;
    export var ERANGE: number;
    export var EROFS: number;
    export var ESPIPE: number;
    export var ESRCH: number;
    export var ETIME: number;
    export var ETIMEDOUT: number;
    export var ETXTBSY: number;
    export var EWOULDBLOCK: number;
    export var EXDEV: number;
    export var WSAEINTR: number;
    export var WSAEBADF: number;
    export var WSAEACCES: number;
    export var WSAEFAULT: number;
    export var WSAEINVAL: number;
    export var WSAEMFILE: number;
    export var WSAEWOULDBLOCK: number;
    export var WSAEINPROGRESS: number;
    export var WSAEALREADY: number;
    export var WSAENOTSOCK: number;
    export var WSAEDESTADDRREQ: number;
    export var WSAEMSGSIZE: number;
    export var WSAEPROTOTYPE: number;
    export var WSAENOPROTOOPT: number;
    export var WSAEPROTONOSUPPORT: number;
    export var WSAESOCKTNOSUPPORT: number;
    export var WSAEOPNOTSUPP: number;
    export var WSAEPFNOSUPPORT: number;
    export var WSAEAFNOSUPPORT: number;
    export var WSAEADDRINUSE: number;
    export var WSAEADDRNOTAVAIL: number;
    export var WSAENETDOWN: number;
    export var WSAENETUNREACH: number;
    export var WSAENETRESET: number;
    export var WSAECONNABORTED: number;
    export var WSAECONNRESET: number;
    export var WSAENOBUFS: number;
    export var WSAEISCONN: number;
    export var WSAENOTCONN: number;
    export var WSAESHUTDOWN: number;
    export var WSAETOOMANYREFS: number;
    export var WSAETIMEDOUT: number;
    export var WSAECONNREFUSED: number;
    export var WSAELOOP: number;
    export var WSAENAMETOOLONG: number;
    export var WSAEHOSTDOWN: number;
    export var WSAEHOSTUNREACH: number;
    export var WSAENOTEMPTY: number;
    export var WSAEPROCLIM: number;
    export var WSAEUSERS: number;
    export var WSAEDQUOT: number;
    export var WSAESTALE: number;
    export var WSAEREMOTE: number;
    export var WSASYSNOTREADY: number;
    export var WSAVERNOTSUPPORTED: number;
    export var WSANOTINITIALISED: number;
    export var WSAEDISCON: number;
    export var WSAENOMORE: number;
    export var WSAECANCELLED: number;
    export var WSAEINVALIDPROCTABLE: number;
    export var WSAEINVALIDPROVIDER: number;
    export var WSAEPROVIDERFAILEDINIT: number;
    export var WSASYSCALLFAILURE: number;
    export var WSASERVICE_NOT_FOUND: number;
    export var WSATYPE_NOT_FOUND: number;
    export var WSA_E_NO_MORE: number;
    export var WSA_E_CANCELLED: number;
    export var WSAEREFUSED: number;
    export var SIGHUP: number;
    export var SIGINT: number;
    export var SIGILL: number;
    export var SIGABRT: number;
    export var SIGFPE: number;
    export var SIGKILL: number;
    export var SIGSEGV: number;
    export var SIGTERM: number;
    export var SIGBREAK: number;
    export var SIGWINCH: number;
    export var SSL_OP_ALL: number;
    export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    export var SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    export var SSL_OP_CISCO_ANYCONNECT: number;
    export var SSL_OP_COOKIE_EXCHANGE: number;
    export var SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    export var SSL_OP_EPHEMERAL_RSA: number;
    export var SSL_OP_LEGACY_SERVER_CONNECT: number;
    export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    export var SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    export var SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    export var SSL_OP_NETSCAPE_CA_DN_BUG: number;
    export var SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NO_COMPRESSION: number;
    export var SSL_OP_NO_QUERY_MTU: number;
    export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    export var SSL_OP_NO_SSLv2: number;
    export var SSL_OP_NO_SSLv3: number;
    export var SSL_OP_NO_TICKET: number;
    export var SSL_OP_NO_TLSv1: number;
    export var SSL_OP_NO_TLSv1_1: number;
    export var SSL_OP_NO_TLSv1_2: number;
    export var SSL_OP_PKCS1_CHECK_1: number;
    export var SSL_OP_PKCS1_CHECK_2: number;
    export var SSL_OP_SINGLE_DH_USE: number;
    export var SSL_OP_SINGLE_ECDH_USE: number;
    export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    export var SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    export var SSL_OP_TLS_D5_BUG: number;
    export var SSL_OP_TLS_ROLLBACK_BUG: number;
    export var ENGINE_METHOD_DSA: number;
    export var ENGINE_METHOD_DH: number;
    export var ENGINE_METHOD_RAND: number;
    export var ENGINE_METHOD_ECDH: number;
    export var ENGINE_METHOD_ECDSA: number;
    export var ENGINE_METHOD_CIPHERS: number;
    export var ENGINE_METHOD_DIGESTS: number;
    export var ENGINE_METHOD_STORE: number;
    export var ENGINE_METHOD_PKEY_METHS: number;
    export var ENGINE_METHOD_PKEY_ASN1_METHS: number;
    export var ENGINE_METHOD_ALL: number;
    export var ENGINE_METHOD_NONE: number;
    export var DH_CHECK_P_NOT_SAFE_PRIME: number;
    export var DH_CHECK_P_NOT_PRIME: number;
    export var DH_UNABLE_TO_CHECK_GENERATOR: number;
    export var DH_NOT_SUITABLE_GENERATOR: number;
    export var NPN_ENABLED: number;
    export var RSA_PKCS1_PADDING: number;
    export var RSA_SSLV23_PADDING: number;
    export var RSA_NO_PADDING: number;
    export var RSA_PKCS1_OAEP_PADDING: number;
    export var RSA_X931_PADDING: number;
    export var RSA_PKCS1_PSS_PADDING: number;
    export var POINT_CONVERSION_COMPRESSED: number;
    export var POINT_CONVERSION_UNCOMPRESSED: number;
    export var POINT_CONVERSION_HYBRID: number;
    export var O_RDONLY: number;
    export var O_WRONLY: number;
    export var O_RDWR: number;
    export var S_IFMT: number;
    export var S_IFREG: number;
    export var S_IFDIR: number;
    export var S_IFCHR: number;
    export var S_IFLNK: number;
    export var O_CREAT: number;
    export var O_EXCL: number;
    export var O_TRUNC: number;
    export var O_APPEND: number;
    export var F_OK: number;
    export var R_OK: number;
    export var W_OK: number;
    export var X_OK: number;
    export var UV_UDP_REUSEADDR: number;
}
// Type definitions for mime
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

declare module "mime" {
	export function lookup(path: string): string;
	export function extension(mime: string): string;
	export function load(filepath: string): void;
	export function define(mimes: Object): void;

	interface Charsets {
		lookup(mime: string): string;
	}

	export var charsets: Charsets;
	export var default_type: string;
}
// Type definitions for serve-static 1.7.1
// Project: https://github.com/expressjs/serve-static
// Definitions by: Uros Smolnik <https://github.com/urossmolnik/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import * as serveStatic from "serve-static";
    app.use(serveStatic("public/ftp", {"index": ["default.html", "default.htm"]}))

 =============================================== */

/// <reference path="../express/express.d.ts" />
/// <reference path="../mime/mime.d.ts" />

declare module "serve-static" {
    import * as express from "express";

    /**
     * Create a new middleware function to serve files from within a given root directory.
     * The file to serve will be determined by combining req.url with the provided root directory.
     * When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
     */
    function serveStatic(root: string, options?: {
        /**
         * Set how "dotfiles" are treated when encountered. A dotfile is a file or directory that begins with a dot (".").
         * Note this check is done on the path itself without checking if the path actually exists on the disk.
         * If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
         * The default value is 'ignore'.
         * 'allow' No special treatment for dotfiles
         * 'deny' Send a 403 for any request for a dotfile
         * 'ignore' Pretend like the dotfile does not exist and call next()
         */
        dotfiles?: string;

        /**
         * Enable or disable etag generation, defaults to true.
         */
        etag?: boolean;

        /**
         * Set file extension fallbacks. When set, if a file is not found, the given extensions will be added to the file name and search for.
         * The first that exists will be served. Example: ['html', 'htm'].
         * The default value is false.
         */
        extensions?: string[];

        /**
         * By default this module will send "index.html" files in response to a request on a directory.
         * To disable this set false or to supply a new index pass a string or an array in preferred order.
         */
        index?: boolean|string|string[];

        /**
         * Enable or disable Last-Modified header, defaults to true. Uses the file system's last modified value.
         */
        lastModified?: boolean;

        /**
         * Provide a max-age in milliseconds for http caching, defaults to 0. This can also be a string accepted by the ms module.
         */
        maxAge?: number|string;

        /**
         * Redirect to trailing "/" when the pathname is a dir. Defaults to true.
         */
        redirect?: boolean;

        /**
         * Function to set custom headers on response. Alterations to the headers need to occur synchronously.
         * The function is called as fn(res, path, stat), where the arguments are:
         * res the response object
         * path the file path that is being sent
         * stat the stat object of the file that is being sent
         */
        setHeaders?: (res: express.Response, path: string, stat: any) => any;
    }): express.Handler;

    import * as m from "mime";

    module serveStatic {
        var mime: typeof m;
    }

    export = serveStatic;
}
// Type definitions for Express 4.x
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import * as express from "express";
    var app = express();

 =============================================== */

/// <reference path="../node/node.d.ts" />
/// <reference path="../serve-static/serve-static.d.ts" />

declare module Express {

    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/borisyankov/DefinitelyTyped/blob/master/method-override/method-override.d.ts)
    export interface Request { }
    export interface Response { }
    export interface Application { }
}


declare module "express" {
    import * as http from "http";
    import * as serveStatic from "serve-static";

    function e(): e.Express;

    module e {
        interface IRoute {
            path: string;
            stack: any;
            all(...handler: RequestHandler[]): IRoute;
            get(...handler: RequestHandler[]): IRoute;
            post(...handler: RequestHandler[]): IRoute;
            put(...handler: RequestHandler[]): IRoute;
            delete(...handler: RequestHandler[]): IRoute;
            patch(...handler: RequestHandler[]): IRoute;
            options(...handler: RequestHandler[]): IRoute;
            head(...handler: RequestHandler[]): IRoute;
        }

        interface IRouterMatcher<T> {
            (name: string|RegExp, ...handlers: RequestHandler[]): T;
        }

        interface IRouter<T> extends RequestHandler {
            /**
             * Map the given param placeholder `name`(s) to the given callback(s).
             *
             * Parameter mapping is used to provide pre-conditions to routes
             * which use normalized placeholders. For example a _:user_id_ parameter
             * could automatically load a user's information from the database without
             * any additional code,
             *
             * The callback uses the samesignature as middleware, the only differencing
             * being that the value of the placeholder is passed, in this case the _id_
             * of the user. Once the `next()` function is invoked, just like middleware
             * it will continue on to execute the route, or subsequent parameter functions.
             *
             *      app.param('user_id', function(req, res, next, id){
             *        User.find(id, function(err, user){
             *          if (err) {
             *            next(err);
             *          } else if (user) {
             *            req.user = user;
             *            next();
             *          } else {
             *            next(new Error('failed to load user'));
             *          }
             *        });
             *      });
             *
             * @param name
             * @param fn
             */
            param(name: string, handler: RequestParamHandler): T;
            param(name: string, matcher: RegExp): T;
            param(name: string, mapper: (param: any) => any): T;
            // Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param() API
            param(callback: (name: string, matcher: RegExp) => RequestParamHandler): T;

            /**
             * Special-cased "all" method, applying the given route `path`,
             * middleware, and callback to _every_ HTTP method.
             *
             * @param path
             * @param fn
             */
            all: IRouterMatcher<T>;
            get: IRouterMatcher<T>;
            post: IRouterMatcher<T>;
            put: IRouterMatcher<T>;
            delete: IRouterMatcher<T>;
            patch: IRouterMatcher<T>;
            options: IRouterMatcher<T>;
            head: IRouterMatcher<T>;

            route(path: string): IRoute;

            use(...handler: RequestHandler[]): T;
            use(handler: ErrorRequestHandler|RequestHandler): T;
            use(path: string, ...handler: RequestHandler[]): T;
            use(path: string, handler: ErrorRequestHandler|RequestHandler): T;
            use(path: string[], ...handler: RequestHandler[]): T;
            use(path: string[], handler: ErrorRequestHandler): T;
            use(path: RegExp, ...handler: RequestHandler[]): T;
            use(path: RegExp, handler: ErrorRequestHandler): T;
            use(path:string, router:Router): T;
        }

        export function Router(options?: any): Router;

        export interface Router extends IRouter<Router> {}

        interface CookieOptions {
            maxAge?: number;
            signed?: boolean;
            expires?: Date;
            httpOnly?: boolean;
            path?: string;
            domain?: string;
            secure?: boolean;
        }

        interface Errback { (err: Error): void; }

        interface Request extends http.ServerRequest, Express.Request {

            /**
             * Return request header.
             *
             * The `Referrer` header field is special-cased,
             * both `Referrer` and `Referer` are interchangeable.
             *
             * Examples:
             *
             *     req.get('Content-Type');
             *     // => "text/plain"
             *
             *     req.get('content-type');
             *     // => "text/plain"
             *
             *     req.get('Something');
             *     // => undefined
             *
             * Aliased as `req.header()`.
             *
             * @param name
             */
            get (name: string): string;

            header(name: string): string;

            headers: { [key: string]: string; };

            /**
             * Check if the given `type(s)` is acceptable, returning
             * the best match when true, otherwise `undefined`, in which
             * case you should respond with 406 "Not Acceptable".
             *
             * The `type` value may be a single mime type string
             * such as "application/json", the extension name
             * such as "json", a comma-delimted list such as "json, html, text/plain",
             * or an array `["json", "html", "text/plain"]`. When a list
             * or array is given the _best_ match, if any is returned.
             *
             * Examples:
             *
             *     // Accept: text/html
             *     req.accepts('html');
             *     // => "html"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('html');
             *     // => "html"
             *     req.accepts('text/html');
             *     // => "text/html"
             *     req.accepts('json, text');
             *     // => "json"
             *     req.accepts('application/json');
             *     // => "application/json"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('image/png');
             *     req.accepts('png');
             *     // => undefined
             *
             *     // Accept: text/*;q=.5, application/json
             *     req.accepts(['html', 'json']);
             *     req.accepts('html, json');
             *     // => "json"
             */
            accepts(type: string): string;

            accepts(type: string[]): string;

            /**
             * Returns the first accepted charset of the specified character sets,
             * based on the request’s Accept-Charset HTTP header field.
             * If none of the specified charsets is accepted, returns false.
             *
             * For more information, or if you have issues or concerns, see accepts.
             * @param charset
             */
            acceptsCharsets(charset?: string|string[]): string[];

            /**
             * Returns the first accepted encoding of the specified encodings,
             * based on the request’s Accept-Encoding HTTP header field.
             * If none of the specified encodings is accepted, returns false.
             *
             * For more information, or if you have issues or concerns, see accepts.
             * @param encoding
             */
            acceptsEncodings(encoding?: string|string[]): string[];

            /**
             * Returns the first accepted language of the specified languages,
             * based on the request’s Accept-Language HTTP header field.
             * If none of the specified languages is accepted, returns false.
             *
             * For more information, or if you have issues or concerns, see accepts.
             *
             * @param lang
             */
            acceptsLanguages(lang?: string|string[]): string[];

            /**
             * Parse Range header field,
             * capping to the given `size`.
             *
             * Unspecified ranges such as "0-" require
             * knowledge of your resource length. In
             * the case of a byte range this is of course
             * the total number of bytes. If the Range
             * header field is not given `null` is returned,
             * `-1` when unsatisfiable, `-2` when syntactically invalid.
             *
             * NOTE: remember that ranges are inclusive, so
             * for example "Range: users=0-3" should respond
             * with 4 users when available, not 3.
             *
             * @param size
             */
            range(size: number): any[];

            /**
             * Return an array of Accepted media types
             * ordered from highest quality to lowest.
             */
            accepted: MediaType[];

            /**
             * Return the value of param `name` when present or `defaultValue`.
             *
             *  - Checks route placeholders, ex: _/user/:id_
             *  - Checks body params, ex: id=12, {"id":12}
             *  - Checks query string params, ex: ?id=12
             *
             * To utilize request bodies, `req.body`
             * should be an object. This can be done by using
             * the `connect.bodyParser()` middleware.
             *
             * @param name
             * @param defaultValue
             */
            param(name: string, defaultValue?: any): string;

            /**
             * Check if the incoming request contains the "Content-Type"
             * header field, and it contains the give mime `type`.
             *
             * Examples:
             *
             *      // With Content-Type: text/html; charset=utf-8
             *      req.is('html');
             *      req.is('text/html');
             *      req.is('text/*');
             *      // => true
             *
             *      // When Content-Type is application/json
             *      req.is('json');
             *      req.is('application/json');
             *      req.is('application/*');
             *      // => true
             *
             *      req.is('html');
             *      // => false
             *
             * @param type
             */
            is(type: string): boolean;

            /**
             * Return the protocol string "http" or "https"
             * when requested with TLS. When the "trust proxy"
             * setting is enabled the "X-Forwarded-Proto" header
             * field will be trusted. If you're running behind
             * a reverse proxy that supplies https for you this
             * may be enabled.
             */
            protocol: string;

            /**
             * Short-hand for:
             *
             *    req.protocol == 'https'
             */
            secure: boolean;

            /**
             * Return the remote address, or when
             * "trust proxy" is `true` return
             * the upstream addr.
             */
            ip: string;

            /**
             * When "trust proxy" is `true`, parse
             * the "X-Forwarded-For" ip address list.
             *
             * For example if the value were "client, proxy1, proxy2"
             * you would receive the array `["client", "proxy1", "proxy2"]`
             * where "proxy2" is the furthest down-stream.
             */
            ips: string[];

            /**
             * Return subdomains as an array.
             *
             * Subdomains are the dot-separated parts of the host before the main domain of
             * the app. By default, the domain of the app is assumed to be the last two
             * parts of the host. This can be changed by setting "subdomain offset".
             *
             * For example, if the domain is "tobi.ferrets.example.com":
             * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
             * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
             */
            subdomains: string[];

            /**
             * Short-hand for `url.parse(req.url).pathname`.
             */
            path: string;

            /**
             * Parse the "Host" header field hostname.
             */
            hostname: string;

            /**
             * @deprecated Use hostname instead.
             */
            host: string;

            /**
             * Check if the request is fresh, aka
             * Last-Modified and/or the ETag
             * still match.
             */
            fresh: boolean;

            /**
             * Check if the request is stale, aka
             * "Last-Modified" and / or the "ETag" for the
             * resource has changed.
             */
            stale: boolean;

            /**
             * Check if the request was an _XMLHttpRequest_.
             */
            xhr: boolean;

            //body: { username: string; password: string; remember: boolean; title: string; };
            body: any;

            //cookies: { string; remember: boolean; };
            cookies: any;

            method: string;

            params: any;

            user: any;

            authenticatedUser: any;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            query: any;

            route: any;

            signedCookies: any;

            originalUrl: string;

            url: string;
            
            baseUrl: string;
            
            app: Application;
        }

        interface MediaType {
            value: string;
            quality: number;
            type: string;
            subtype:  string;
        }

        interface Send {
            (status: number, body?: any): Response;
            (body: any): Response;
        }

        interface Response extends http.ServerResponse, Express.Response {
            /**
             * Set status `code`.
             *
             * @param code
             */
            status(code: number): Response;

            /**
             * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
             * @link http://expressjs.com/4x/api.html#res.sendStatus
             *
             * Examples:
             *
             *    res.sendStatus(200); // equivalent to res.status(200).send('OK')
             *    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
             *    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
             *    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
             *
             * @param code
             */
            sendStatus(code: number): Response;

            /**
             * Set Link header field with the given `links`.
             *
             * Examples:
             *
             *    res.links({
             *      next: 'http://api.example.com/users?page=2',
             *      last: 'http://api.example.com/users?page=5'
             *    });
             *
             * @param links
             */
            links(links: any): Response;

            /**
             * Send a response.
             *
             * Examples:
             *
             *     res.send(new Buffer('wahoo'));
             *     res.send({ some: 'json' });
             *     res.send('<p>some html</p>');
             *     res.send(404, 'Sorry, cant find that');
             *     res.send(404);
             */
            send: Send;

            /**
             * Send JSON response.
             *
             * Examples:
             *
             *     res.json(null);
             *     res.json({ user: 'tj' });
             *     res.json(500, 'oh noes!');
             *     res.json(404, 'I dont have that');
             */
            json: Send;

            /**
             * Send JSON response with JSONP callback support.
             *
             * Examples:
             *
             *     res.jsonp(null);
             *     res.jsonp({ user: 'tj' });
             *     res.jsonp(500, 'oh noes!');
             *     res.jsonp(404, 'I dont have that');
             */
            jsonp: Send;

            /**
             * Transfer the file at the given `path`.
             *
             * Automatically sets the _Content-Type_ response header field.
             * The callback `fn(err)` is invoked when the transfer is complete
             * or when an error occurs. Be sure to check `res.sentHeader`
             * if you wish to attempt responding, as the header and some data
             * may have already been transferred.
             *
             * Options:
             *
             *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
             *   - `root`     root directory for relative filenames
             *   - `headers`  object of headers to serve with file
             *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
             *
             * Other options are passed along to `send`.
             *
             * Examples:
             *
             *  The following example illustrates how `res.sendFile()` may
             *  be used as an alternative for the `static()` middleware for
             *  dynamic situations. The code backing `res.sendFile()` is actually
             *  the same code, so HTTP cache support etc is identical.
             *
             *     app.get('/user/:uid/photos/:file', function(req, res){
             *       var uid = req.params.uid
             *         , file = req.params.file;
             *
             *       req.user.mayViewFilesFrom(uid, function(yes){
             *         if (yes) {
             *           res.sendFile('/uploads/' + uid + '/' + file);
             *         } else {
             *           res.send(403, 'Sorry! you cant see that.');
             *         }
             *       });
             *     });
             *
             * @api public
             */
            sendFile(path: string): void;
            sendFile(path: string, options: any): void;
            sendFile(path: string, fn: Errback): void;
            sendFile(path: string, options: any, fn: Errback): void;

            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, options: any): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, fn: Errback): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, options: any, fn: Errback): void;

            /**
             * Transfer the file at the given `path` as an attachment.
             *
             * Optionally providing an alternate attachment `filename`,
             * and optional callback `fn(err)`. The callback is invoked
             * when the data transfer is complete, or when an error has
             * ocurred. Be sure to check `res.headerSent` if you plan to respond.
             *
             * This method uses `res.sendfile()`.
             */
            download(path: string): void;
            download(path: string, filename: string): void;
            download(path: string, fn: Errback): void;
            download(path: string, filename: string, fn: Errback): void;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            contentType(type: string): Response;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            type(type: string): Response;

            /**
             * Respond to the Acceptable formats using an `obj`
             * of mime-type callbacks.
             *
             * This method uses `req.accepted`, an array of
             * acceptable types ordered by their quality values.
             * When "Accept" is not present the _first_ callback
             * is invoked, otherwise the first match is used. When
             * no match is performed the server responds with
             * 406 "Not Acceptable".
             *
             * Content-Type is set for you, however if you choose
             * you may alter this within the callback using `res.type()`
             * or `res.set('Content-Type', ...)`.
             *
             *    res.format({
             *      'text/plain': function(){
             *        res.send('hey');
             *      },
             *
             *      'text/html': function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      'appliation/json': function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * In addition to canonicalized MIME types you may
             * also use extnames mapped to these types:
             *
             *    res.format({
             *      text: function(){
             *        res.send('hey');
             *      },
             *
             *      html: function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      json: function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * By default Express passes an `Error`
             * with a `.status` of 406 to `next(err)`
             * if a match is not made. If you provide
             * a `.default` callback it will be invoked
             * instead.
             *
             * @param obj
             */
            format(obj: any): Response;

            /**
             * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
             *
             * @param filename
             */
            attachment(filename?: string): Response;

            /**
             * Set header `field` to `val`, or pass
             * an object of header fields.
             *
             * Examples:
             *
             *    res.set('Foo', ['bar', 'baz']);
             *    res.set('Accept', 'application/json');
             *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
             *
             * Aliased as `res.header()`.
             */
            set(field: any): Response;
            set(field: string, value?: string): Response;

            header(field: any): Response;
            header(field: string, value?: string): Response;

            // Property indicating if HTTP headers has been sent for the response.
            headersSent: boolean;

            /**
             * Get value for header `field`.
             *
             * @param field
             */
            get (field: string): string;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            /**
             * Set cookie `name` to `val`, with the given `options`.
             *
             * Options:
             *
             *    - `maxAge`   max-age in milliseconds, converted to `expires`
             *    - `signed`   sign the cookie
             *    - `path`     defaults to "/"
             *
             * Examples:
             *
             *    // "Remember Me" for 15 minutes
             *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
             *
             *    // save as above
             *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
             */
            cookie(name: string, val: string, options: CookieOptions): Response;
            cookie(name: string, val: any, options: CookieOptions): Response;
            cookie(name: string, val: any): Response;

            /**
             * Set the location header to `url`.
             *
             * The given `url` can also be the name of a mapped url, for
             * example by default express supports "back" which redirects
             * to the _Referrer_ or _Referer_ headers or "/".
             *
             * Examples:
             *
             *    res.location('/foo/bar').;
             *    res.location('http://example.com');
             *    res.location('../login'); // /blog/post/1 -> /blog/login
             *
             * Mounting:
             *
             *   When an application is mounted and `res.location()`
             *   is given a path that does _not_ lead with "/" it becomes
             *   relative to the mount-point. For example if the application
             *   is mounted at "/blog", the following would become "/blog/login".
             *
             *      res.location('login');
             *
             *   While the leading slash would result in a location of "/login":
             *
             *      res.location('/login');
             *
             * @param url
             */
            location(url: string): Response;

            /**
             * Redirect to the given `url` with optional response `status`
             * defaulting to 302.
             *
             * The resulting `url` is determined by `res.location()`, so
             * it will play nicely with mounted apps, relative paths,
             * `"back"` etc.
             *
             * Examples:
             *
             *    res.redirect('/foo/bar');
             *    res.redirect('http://example.com');
             *    res.redirect(301, 'http://example.com');
             *    res.redirect('http://example.com', 301);
             *    res.redirect('../login'); // /blog/post/1 -> /blog/login
             */
            redirect(url: string): void;
            redirect(status: number, url: string): void;
            redirect(url: string, status: number): void;

            /**
             * Render `view` with the given `options` and optional callback `fn`.
             * When a callback function is given a response will _not_ be made
             * automatically, otherwise a response of _200_ and _text/html_ is given.
             *
             * Options:
             *
             *  - `cache`     boolean hinting to the engine it should cache
             *  - `filename`  filename of the view being rendered
             */
            render(view: string, options?: Object, callback?: (err: Error, html: string) => void ): void;
            render(view: string, callback?: (err: Error, html: string) => void ): void;

            locals: any;

            charset: string;
        }

        interface ErrorRequestHandler {
            (err: any, req: Request, res: Response, next: Function): any;
        }

        interface RequestHandler {
            (req: Request, res: Response, next: Function): any;
        }

        interface Handler extends RequestHandler {}

        interface RequestParamHandler {
            (req: Request, res: Response, next: Function, param: any): any;
        }

        interface Application extends IRouter<Application>, Express.Application {
            /**
             * Initialize the server.
             *
             *   - setup default configuration
             *   - setup default middleware
             *   - setup route reflection methods
             */
            init(): void;

            /**
             * Initialize application configuration.
             */
            defaultConfiguration(): void;

            /**
             * Register the given template engine callback `fn`
             * as `ext`.
             *
             * By default will `require()` the engine based on the
             * file extension. For example if you try to render
             * a "foo.jade" file Express will invoke the following internally:
             *
             *     app.engine('jade', require('jade').__express);
             *
             * For engines that do not provide `.__express` out of the box,
             * or if you wish to "map" a different extension to the template engine
             * you may use this method. For example mapping the EJS template engine to
             * ".html" files:
             *
             *     app.engine('html', require('ejs').renderFile);
             *
             * In this case EJS provides a `.renderFile()` method with
             * the same signature that Express expects: `(path, options, callback)`,
             * though note that it aliases this method as `ejs.__express` internally
             * so if you're using ".ejs" extensions you dont need to do anything.
             *
             * Some template engines do not follow this convention, the
             * [Consolidate.js](https://github.com/visionmedia/consolidate.js)
             * library was created to map all of node's popular template
             * engines to follow this convention, thus allowing them to
             * work seamlessly within Express.
             */
            engine(ext: string, fn: Function): Application;

            /**
             * Assign `setting` to `val`, or return `setting`'s value.
             *
             *    app.set('foo', 'bar');
             *    app.get('foo');
             *    // => "bar"
             *    app.set('foo', ['bar', 'baz']);
             *    app.get('foo');
             *    // => ["bar", "baz"]
             *
             * Mounted servers inherit their parent server's settings.
             *
             * @param setting
             * @param val
             */
            set(setting: string, val: any): Application;
            get: {
                (name: string): any; // Getter
                (name: string|RegExp, ...handlers: RequestHandler[]): Application;
            };

            /**
             * Return the app's absolute pathname
             * based on the parent(s) that have
             * mounted it.
             *
             * For example if the application was
             * mounted as "/admin", which itself
             * was mounted as "/blog" then the
             * return value would be "/blog/admin".
             */
            path(): string;

            /**
             * Check if `setting` is enabled (truthy).
             *
             *    app.enabled('foo')
             *    // => false
             *
             *    app.enable('foo')
             *    app.enabled('foo')
             *    // => true
             */
            enabled(setting: string): boolean;

            /**
             * Check if `setting` is disabled.
             *
             *    app.disabled('foo')
             *    // => true
             *
             *    app.enable('foo')
             *    app.disabled('foo')
             *    // => false
             *
             * @param setting
             */
            disabled(setting: string): boolean;

            /**
             * Enable `setting`.
             *
             * @param setting
             */
            enable(setting: string): Application;

            /**
             * Disable `setting`.
             *
             * @param setting
             */
            disable(setting: string): Application;

            /**
             * Configure callback for zero or more envs,
             * when no `env` is specified that callback will
             * be invoked for all environments. Any combination
             * can be used multiple times, in any order desired.
             *
             * Examples:
             *
             *    app.configure(function(){
             *      // executed for all envs
             *    });
             *
             *    app.configure('stage', function(){
             *      // executed staging env
             *    });
             *
             *    app.configure('stage', 'production', function(){
             *      // executed for stage and production
             *    });
             *
             * Note:
             *
             *  These callbacks are invoked immediately, and
             *  are effectively sugar for the following:
             *
             *     var env = process.env.NODE_ENV || 'development';
             *
             *      switch (env) {
             *        case 'development':
             *          ...
             *          break;
             *        case 'stage':
             *          ...
             *          break;
             *        case 'production':
             *          ...
             *          break;
             *      }
             *
             * @param env
             * @param fn
             */
            configure(fn: Function): Application;
            configure(env0: string, fn: Function): Application;
            configure(env0: string, env1: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, env3: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, env3: string, env4: string, fn: Function): Application;

            /**
             * Render the given view `name` name with `options`
             * and a callback accepting an error and the
             * rendered template string.
             *
             * Example:
             *
             *    app.render('email', { name: 'Tobi' }, function(err, html){
             *      // ...
             *    })
             *
             * @param name
             * @param options or fn
             * @param fn
             */
            render(name: string, options?: Object, callback?: (err: Error, html: string) => void): void;
            render(name: string, callback: (err: Error, html: string) => void): void;


            /**
             * Listen for connections.
             *
             * A node `http.Server` is returned, with this
             * application (which is a `Function`) as its
             * callback. If you wish to create both an HTTP
             * and HTTPS server you may do so with the "http"
             * and "https" modules as shown here:
             *
             *    var http = require('http')
             *      , https = require('https')
             *      , express = require('express')
             *      , app = express();
             *
             *    http.createServer(app).listen(80);
             *    https.createServer({ ... }, app).listen(443);
             */
            listen(port: number, hostname: string, backlog: number, callback?: Function): http.Server;
            listen(port: number, hostname: string, callback?: Function): http.Server;
            listen(port: number, callback?: Function): http.Server;
            listen(path: string, callback?: Function): http.Server;
            listen(handle: any, listeningListener?: Function): http.Server;

            route(path: string): IRoute;

            router: string;

            settings: any;

            resource: any;

            map: any;

            locals: any;

            /**
             * The app.routes object houses all of the routes defined mapped by the
             * associated HTTP verb. This object may be used for introspection
             * capabilities, for example Express uses this internally not only for
             * routing but to provide default OPTIONS behaviour unless app.options()
             * is used. Your application or framework may also remove routes by
             * simply by removing them from this object.
             */
            routes: any;
        }

        interface Express extends Application {
            /**
             * Framework version.
             */
            version: string;

            /**
             * Expose mime.
             */
            mime: string;

            (): Application;

            /**
            * Create an express application.
            */
            createApplication(): Application;

            createServer(): Application;

            application: any;

            request: Request;

            response: Response;
        }

        var static: typeof serveStatic;
    }

    export = e;
}
// Type definitions for form-data
// Project: https://github.com/felixge/node-form-data
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/form-data.d.ts

declare module "form-data" {
	export class FormData {
		append(key: string, value: any, options?: any): FormData;
		getHeaders(): Object;
		// TODO expand pipe
		pipe(to: any): any;
		submit(params: string|Object, callback: (error: any, response: any) => void): any;
	}
}
// Type definitions for jQuery 1.10.x / 2.0.x
// Project: http://jquery.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Christian Hoffmeister <https://github.com/choffmeister>, Steve Fenton <https://github.com/Steve-Fenton>, Diullei Gomes <https://github.com/Diullei>, Tass Iliopoulos <https://github.com/tasoili>, Jason Swearingen <https://github.com/jasons-novaleaf>, Sean Hill <https://github.com/seanski>, Guus Goossens <https://github.com/Guuz>, Kelly Summerlin <https://github.com/ksummerlin>, Basarat Ali Syed <https://github.com/basarat>, Nicholas Wolverson <https://github.com/nwolverson>, Derek Cicerone <https://github.com/derekcicerone>, Andrew Gaspar <https://github.com/AndrewGaspar>, James Harrison Fisher <https://github.com/jameshfisher>, Seikichi Kondo <https://github.com/seikichi>, Benjamin Jackman <https://github.com/benjaminjackman>, Poul Sorensen <https://github.com/s093294>, Josh Strobl <https://github.com/JoshStrobl>, John Reilly <https://github.com/johnnyreilly/>, Dick van den Brink <https://github.com/DickvdBrink>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/**
 * Interface for the AJAX setting that will configure the AJAX request
 */
interface JQueryAjaxSettings {
    /**
     * The content type sent in the request header that tells the server what kind of response it will accept in return. If the accepts setting needs modification, it is recommended to do so once in the $.ajaxSetup() method.
     */
    accepts?: any;
    /**
     * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async: false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback options instead of the corresponding methods of the jqXHR object such as jqXHR.done() or the deprecated jqXHR.success().
     */
    async?: boolean;
    /**
     * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless of the type of request.
     */
    beforeSend? (jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any;
    /**
     * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a POST is made to a URL that has already been requested by a GET.
     */
    cache?: boolean;
    /**
     * A function to be called when the request finishes (after success and error callbacks are executed). The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a string categorizing the status of the request ("success", "notmodified", "error", "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
     */
    complete? (jqXHR: JQueryXHR, textStatus: string): any;
    /**
     * An object of string/regular-expression pairs that determine how jQuery will parse the response, given its content type. (version added: 1.5)
     */
    contents?: { [key: string]: any; };
    //According to jQuery.ajax source code, ajax's option actually allows contentType to set to "false"
    // https://github.com/borisyankov/DefinitelyTyped/issues/742
    /**
     * When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent). The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force the browser to change the encoding.
     */
    contentType?: any;
    /**
     * This object will be made the context of all Ajax-related callbacks. By default, the context is an object that represents the ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
     */
    context?: any;
    /**
     * An object containing dataType-to-dataType converters. Each converter's value is a function that returns the transformed value of the response. (version added: 1.5)
     */
    converters?: { [key: string]: any; };
    /**
     * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. This allows, for example, server-side redirection to another domain. (version added: 1.5)
     */
    crossDomain?: boolean;
    /**
     * Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the traditional setting (described below).
     */
    data?: any;
    /**
     * A function to be used to handle the raw response data of XMLHttpRequest.This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the 'dataType' parameter.
     */
    dataFilter? (data: any, ty: any): any;
    /**
     * The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string). 
     */
    dataType?: string;
    /**
     * A function to be called if the request fails. The function receives three arguments: The jqXHR (in jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides null) are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note: This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
     */
    error? (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): any;
    /**
     * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to control various Ajax Events.
     */
    global?: boolean;
    /**
     * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. The header X-Requested-With: XMLHttpRequest is always added, but its default XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from within the beforeSend function. (version added: 1.5)
     */
    headers?: { [key: string]: any; };
    /**
     * Allow the request to be successful only if the response has changed since the last request. This is done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
     */
    ifModified?: boolean;
    /**
     * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery does not recognize it as such by default. The following protocols are currently recognized as local: file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so once in the $.ajaxSetup() method. (version added: 1.5.1)
     */
    isLocal?: boolean;
    /**
     * Override the callback function name in a jsonp request. This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for transformation. In this case, you should also explicitly set the jsonpCallback setting. For example, { jsonp: false, jsonpCallback: "callbackName" }
     */
    jsonp?: any;
    /**
     * Specify the callback function name for a JSONP request. This value will be used instead of the random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name as it'll make it easier to manage the requests and provide callbacks and error handling. You may want to specify the callback when you want to enable better browser caching of GET requests. As of jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback is set to the return value of that function.
     */
    jsonpCallback?: any;
    /**
     * The HTTP method to use for the request (e.g. "POST", "GET", "PUT"). (version added: 1.9.0)
     */
    method?: string;
    /**
     * A mime type to override the XHR mime type. (version added: 1.5.1)
     */
    mimeType?: string;
    /**
     * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    password?: string;
    /**
     * By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to false.
     */
    processData?: boolean;
    /**
     * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request. Used when the character set on the local page is not the same as the one on the remote script.
     */
    scriptCharset?: string;
    /**
     * An object of numeric HTTP codes and functions to be called when the response has the corresponding code. f the request is successful, the status code functions take the same parameters as the success callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback. (version added: 1.5)
     */
    statusCode?: { [key: string]: any; };
    /**
     * A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
     */
    success? (data: any, textStatus: string, jqXHR: JQueryXHR): any;
    /**
     * Set a timeout (in milliseconds) for the request. This will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the $.ajax call is made; if several other requests are in progress and the browser has no connections available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be cancelled by a timeout; the script will run even if it arrives after the timeout period.
     */
    timeout?: number;
    /**
     * Set this to true if you wish to use the traditional style of param serialization.
     */
    traditional?: boolean;
    /**
     * The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
     */
    type?: string;
    /**
     * A string containing the URL to which the request is sent.
     */
    url?: string;
    /**
     * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    username?: string;
    /**
     * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or enhancements to the factory.
     */
    xhr?: any;
    /**
     * An object of fieldName-fieldValue pairs to set on the native XHR object. For example, you can use it to set withCredentials to true for cross-domain requests if needed. In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+ should you require the use of it. (version added: 1.5.1)
     */
    xhrFields?: { [key: string]: any; };
}

/**
 * Interface for the jqXHR object
 */
interface JQueryXHR extends XMLHttpRequest, JQueryPromise<any> {
    /**
     * The .overrideMimeType() method may be used in the beforeSend() callback function, for example, to modify the response content-type header. As of jQuery 1.5.1, the jqXHR object also contains the overrideMimeType() method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5). 
     */
    overrideMimeType(mimeType: string): any;
    /**
     * Cancel the request. 
     *
     * @param statusText A string passed as the textStatus parameter for the done callback. Default value: "canceled"
     */
    abort(statusText?: string): void;
    /**
     * Incorporates the functionality of the .done() and .fail() methods, allowing (as of jQuery 1.8) the underlying Promise to be manipulated. Refer to deferred.then() for implementation details.
     */
    then(doneCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, failCallback?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => void): JQueryPromise<any>;
    /**
     * Property containing the parsed response if the response Content-Type is json
     */
    responseJSON?: any;
    /**
     * A function to be called if the request fails.
     */
    error(xhr: JQueryXHR, textStatus: string, errorThrown: string): void;
}

/**
 * Interface for the JQuery callback
 */
interface JQueryCallback {
    /**
     * Add a callback or a collection of callbacks to a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be added to the callback list.
     */
    add(callbacks: Function): JQueryCallback;
    /**
     * Add a callback or a collection of callbacks to a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be added to the callback list.
     */
    add(callbacks: Function[]): JQueryCallback;

    /**
     * Disable a callback list from doing anything more.
     */
    disable(): JQueryCallback;

    /**
     * Determine if the callbacks list has been disabled.
     */
    disabled(): boolean;

    /**
     * Remove all of the callbacks from a list.
     */
    empty(): JQueryCallback;

    /**
     * Call all of the callbacks with the given arguments
     * 
     * @param arguments The argument or list of arguments to pass back to the callback list.
     */
    fire(...arguments: any[]): JQueryCallback;

    /**
     * Determine if the callbacks have already been called at least once.
     */
    fired(): boolean;

    /**
     * Call all callbacks in a list with the given context and arguments.
     * 
     * @param context A reference to the context in which the callbacks in the list should be fired.
     * @param arguments An argument, or array of arguments, to pass to the callbacks in the list.
     */
    fireWith(context?: any, args?: any[]): JQueryCallback;

    /**
     * Determine whether a supplied callback is in a list
     * 
     * @param callback The callback to search for.
     */
    has(callback: Function): boolean;

    /**
     * Lock a callback list in its current state.
     */
    lock(): JQueryCallback;

    /**
     * Determine if the callbacks list has been locked.
     */
    locked(): boolean;

    /**
     * Remove a callback or a collection of callbacks from a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be removed from the callback list.
     */
    remove(callbacks: Function): JQueryCallback;
    /**
     * Remove a callback or a collection of callbacks from a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be removed from the callback list.
     */
    remove(callbacks: Function[]): JQueryCallback;
}

/**
 * Allows jQuery Promises to interop with non-jQuery promises
 */
interface JQueryGenericPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then<U>(doneFilter: (value?: T, ...values: any[]) => U|JQueryPromise<U>, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;

    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then(doneFilter: (value?: T, ...values: any[]) => void, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any): JQueryPromise<void>;
}

/**
 * Interface for the JQuery promise/deferred callbacks
 */
interface JQueryPromiseCallback<T> {
    (value?: T, ...args: any[]): void;
}

interface JQueryPromiseOperator<T, U> {
    (callback1: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...callbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<U>;
}

/**
 * Interface for the JQuery promise, part of callbacks
 */
interface JQueryPromise<T> extends JQueryGenericPromise<T> {
    /**
     * Determine the current state of a Deferred object.
     */
    state(): string;
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallbacks1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     */
    always(alwaysCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     * 
     * @param doneCallbacks1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     */
    done(doneCallback1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     * 
     * @param failCallbacks1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     */
    fail(failCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     */
    progress(progressCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;

    // Deprecated - given no typings
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise<any>;
}

/**
 * Interface for the JQuery deferred, part of callbacks
 */
interface JQueryDeferred<T> extends JQueryGenericPromise<T> {
    /**
     * Determine the current state of a Deferred object.
     */
    state(): string;
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallbacks1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     */
    always(alwaysCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     * 
     * @param doneCallbacks1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     */
    done(doneCallback1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     * 
     * @param failCallbacks1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     */
    fail(failCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     */
    progress(progressCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;

    /**
     * Call the progressCallbacks on a Deferred object with the given args.
     * 
     * @param args Optional arguments that are passed to the progressCallbacks.
     */
    notify(value?: any, ...args: any[]): JQueryDeferred<T>;

    /**
     * Call the progressCallbacks on a Deferred object with the given context and args.
     * 
     * @param context Context passed to the progressCallbacks as the this object.
     * @param args Optional arguments that are passed to the progressCallbacks.
     */
    notifyWith(context: any, value?: any[]): JQueryDeferred<T>;

    /**
     * Reject a Deferred object and call any failCallbacks with the given args.
     * 
     * @param args Optional arguments that are passed to the failCallbacks.
     */
    reject(value?: any, ...args: any[]): JQueryDeferred<T>;
    /**
     * Reject a Deferred object and call any failCallbacks with the given context and args.
     * 
     * @param context Context passed to the failCallbacks as the this object.
     * @param args An optional array of arguments that are passed to the failCallbacks.
     */
    rejectWith(context: any, value?: any[]): JQueryDeferred<T>;

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given args.
     * 
     * @param value First argument passed to doneCallbacks.
     * @param args Optional subsequent arguments that are passed to the doneCallbacks.
     */
    resolve(value?: T, ...args: any[]): JQueryDeferred<T>;

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given context and args.
     * 
     * @param context Context passed to the doneCallbacks as the this object.
     * @param args An optional array of arguments that are passed to the doneCallbacks.
     */
    resolveWith(context: any, value?: T[]): JQueryDeferred<T>;

    /**
     * Return a Deferred's Promise object.
     * 
     * @param target Object onto which the promise methods have to be attached
     */
    promise(target?: any): JQueryPromise<T>;

    // Deprecated - given no typings
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise<any>;
}

/**
 * Interface of the JQuery extension of the W3C event object
 */
interface BaseJQueryEventObject extends Event {
    data: any;
    delegateTarget: Element;
    isDefaultPrevented(): boolean;
    isImmediatePropagationStopped(): boolean;
    isPropagationStopped(): boolean;
    namespace: string;
    originalEvent: Event;
    preventDefault(): any;
    relatedTarget: Element;
    result: any;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    target: Element;
    pageX: number;
    pageY: number;
    which: number;
    metaKey: boolean;
}

interface JQueryInputEventObject extends BaseJQueryEventObject {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

interface JQueryMouseEventObject extends JQueryInputEventObject {
    button: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}

interface JQueryKeyEventObject extends JQueryInputEventObject {
    char: any;
    charCode: number;
    key: any;
    keyCode: number;
}

interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject{
}

/*
    Collection of properties of the current browser
*/

interface JQuerySupport {
    ajax?: boolean;
    boxModel?: boolean;
    changeBubbles?: boolean;
    checkClone?: boolean;
    checkOn?: boolean;
    cors?: boolean;
    cssFloat?: boolean;
    hrefNormalized?: boolean;
    htmlSerialize?: boolean;
    leadingWhitespace?: boolean;
    noCloneChecked?: boolean;
    noCloneEvent?: boolean;
    opacity?: boolean;
    optDisabled?: boolean;
    optSelected?: boolean;
    scriptEval? (): boolean;
    style?: boolean;
    submitBubbles?: boolean;
    tbody?: boolean;
}

interface JQueryParam {
    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     * 
     * @param obj An array or object to serialize.
     */
    (obj: any): string;

    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     * 
     * @param obj An array or object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     */
    (obj: any, traditional: boolean): string;
}

/**
 * The interface used to construct jQuery events (with $.Event). It is
 * defined separately instead of inline in JQueryStatic to allow
 * overriding the construction function with specific strings
 * returning specific event objects.
 */
interface JQueryEventConstructor {
    (name: string, eventProperties?: any): JQueryEventObject;
    new (name: string, eventProperties?: any): JQueryEventObject;
}

/**
 * The interface used to specify coordinates.
 */
interface JQueryCoordinates {
    left: number;
    top: number;
}

/**
 * Elements in the array returned by serializeArray()
 */
interface JQuerySerializeArrayElement {
    name: string;
    value: string;
}

interface JQueryAnimationOptions { 
    /**
     * A string or number determining how long the animation will run.
     */
    duration?: any; 
    /**
     * A string indicating which easing function to use for the transition.
     */
    easing?: string; 
    /**
     * A function to call once the animation is complete.
     */
    complete?: Function; 
    /**
     * A function to be called for each animated property of each animated element. This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
     */
    step?: (now: number, tween: any) => any; 
    /**
     * A function to be called after each step of the animation, only once per animated element regardless of the number of animated properties. (version added: 1.8)
     */
    progress?: (animation: JQueryPromise<any>, progress: number, remainingMs: number) => any; 
    /**
     * A function to call when the animation begins. (version added: 1.8)
     */
    start?: (animation: JQueryPromise<any>) => any; 
    /**
     * A function to be called when the animation completes (its Promise object is resolved). (version added: 1.8)
     */
    done?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any; 
    /**
     * A function to be called when the animation fails to complete (its Promise object is rejected). (version added: 1.8)
     */
    fail?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any; 
    /**
     * A function to be called when the animation completes or stops without completing (its Promise object is either resolved or rejected). (version added: 1.8)
     */
    always?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any; 
    /**
     * A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case the animation is added to the queue represented by that string. When a custom queue name is used the animation does not automatically start; you must call .dequeue("queuename") to start it.
     */
    queue?: any; 
    /**
     * A map of one or more of the CSS properties defined by the properties argument and their corresponding easing functions. (version added: 1.4)
     */
    specialEasing?: Object;
}

interface JQueryEasingFunction {
    ( percent: number ): number;
}

interface JQueryEasingFunctions {
    [ name: string ]: JQueryEasingFunction;
    linear: JQueryEasingFunction;
    swing: JQueryEasingFunction;
}

/**
 * Static members of jQuery (those on $ and jQuery themselves)
 */
interface JQueryStatic {

    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
     */
    ajax(settings: JQueryAjaxSettings): JQueryXHR;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
     */
    ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;

    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
     *
     * @param dataTypes An optional string containing one or more space-separated dataTypes
     * @param handler A handler to set default values for future Ajax requests.
     */
    ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
     *
     * @param handler A handler to set default values for future Ajax requests.
     */
    ajaxPrefilter(handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;

    ajaxSettings: JQueryAjaxSettings;

     /**
      * Set default values for future Ajax requests. Its use is not recommended.
      *
      * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
      */
    ajaxSetup(options: JQueryAjaxSettings): void;

    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
     */
    get(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
     */
    get(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     */
    getJSON(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     */
    getJSON(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     */
    getScript(url: string, success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;

    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     */
    param: JQueryParam;

    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     */
    post(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     */
    post(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;

    /**
     * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
     *
     * @param flags An optional list of space-separated flags that change how the callback list behaves.
     */
    Callbacks(flags?: string): JQueryCallback;

    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param hold Indicates whether the ready hold is being requested or released
     */
    holdReady(hold: boolean): void;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     */
    (selector: string, context?: Element|JQuery): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param element A DOM element to wrap in a jQuery object.
     */
    (element: Element): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param elementArray An array containing a set of DOM elements to wrap in a jQuery object.
     */
    (elementArray: Element[]): JQuery;

    /**
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param callback A function to execute after the DOM is ready.
     */
    (callback: (jQueryAlias?: JQueryStatic) => any): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param object A plain object to wrap in a jQuery object.
     */
    (object: {}): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param object An existing jQuery object to clone.
     */
    (object: JQuery): JQuery;

    /**
     * Specify a function to execute when the DOM is fully loaded.
     */
    (): JQuery;

    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html A string of HTML to create on the fly. Note that this parses HTML, not XML.
     * @param ownerDocument A document in which the new elements will be created.
     */
    (html: string, ownerDocument?: Document): JQuery;

    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
     * @param attributes An object of attributes, events, and methods to call on the newly-created element.
     */
    (html: string, attributes: Object): JQuery;

    /**
     * Relinquish jQuery's control of the $ variable.
     *
     * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
     */
    noConflict(removeAll?: boolean): Object;

    /**
     * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
     *
     * @param deferreds One or more Deferred objects, or plain JavaScript objects.
     */
    when<T>(...deferreds: Array<T|JQueryPromise<T>/* as JQueryDeferred<T> */>): JQueryPromise<T>;

    /**
     * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.
     */
    cssHooks: { [key: string]: any; };
    cssNumber: any;

    /**
     * Store arbitrary data associated with the specified element. Returns the value that was set.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @param value The new data value.
     */
    data<T>(element: Element, key: string, value: T): T;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     */
    data(element: Element, key: string): any;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param element The DOM element to associate with the data.
     */
    data(element: Element): any;

    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param element A DOM element from which to remove and execute a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    dequeue(element: Element, queueName?: string): void;

    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param element A DOM element to be checked for data.
     */
    hasData(element: Element): boolean;

    /**
     * Show the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element to inspect for an attached queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    queue(element: Element, queueName?: string): any[];
    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element where the array of queued functions is attached.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue An array of functions to replace the current queue contents.
     */
    queue(element: Element, queueName: string, newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element on which to add a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param callback The new function to add to the queue.
     */
    queue(element: Element, queueName: string, callback: Function): JQuery;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param element A DOM element from which to remove data.
     * @param name A string naming the piece of data to remove.
     */
    removeData(element: Element, name?: string): JQuery;

    /**
     * A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
     *
     * @param beforeStart A function that is called just before the constructor returns.
     */
    Deferred<T>(beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferred<T>;

    /**
     * Effects
     */

    easing: JQueryEasingFunctions;

    fx: {
        tick: () => void;
        /**
         * The rate (in milliseconds) at which animations fire.
         */
        interval: number;
        stop: () => void;
        speeds: { slow: number; fast: number; };
        /**
         * Globally disable all animations.
         */
        off: boolean;
        step: any;
    };

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fnction The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     */
    proxy(fnction: (...args: any[]) => any, context: Object, ...additionalArguments: any[]): any;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param context The object to which the context (this) of the function should be set.
     * @param name The name of the function whose context will be changed (should be a property of the context object).
     * @param additionalArguments Any number of arguments to be passed to the function named in the name argument.
     */
    proxy(context: Object, name: string, ...additionalArguments: any[]): any;

    Event: JQueryEventConstructor;

    /**
     * Takes a string and throws an exception containing it.
     *
     * @param message The message to send out.
     */
    error(message: any): JQuery;

    expr: any;
    fn: any;  //TODO: Decide how we want to type this

    isReady: boolean;

    // Properties
    support: JQuerySupport;

    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     * 
     * @param container The DOM element that may contain the other element.
     * @param contained The DOM element that may be contained by (a descendant of) the other element.
     */
    contains(container: Element, contained: Element): boolean;

    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     * 
     * @param collection The object or array to iterate over.
     * @param callback The function that will be executed on every object.
     */
    each<T>(
        collection: T[],
        callback: (indexInArray: number, valueOfElement: T) => any
        ): any;

    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     * 
     * @param collection The object or array to iterate over.
     * @param callback The function that will be executed on every object.
     */
    each(
        collection: any,
        callback: (indexInArray: any, valueOfElement: any) => any
        ): any;

    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     */
    extend(target: any, object1?: any, ...objectN: any[]): any;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy).
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     */
    extend(deep: boolean, target: any, object1?: any, ...objectN: any[]): any;

    /**
     * Execute some JavaScript code globally.
     *
     * @param code The JavaScript code to execute.
     */
    globalEval(code: string): any;

    /**
     * Finds the elements of an array which satisfy a filter function. The original array is not affected.
     *
     * @param array The array to search through.
     * @param func The function to process each item against. The first argument to the function is the item, and the second argument is the index. The function should return a Boolean value.  this will be the global window object.
     * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true. If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
     */
    grep<T>(array: T[], func: (elementOfArray: T, indexInArray: number) => boolean, invert?: boolean): T[];

    /**
     * Search for a specified value within an array and return its index (or -1 if not found).
     *
     * @param value The value to search for.
     * @param array An array through which to search.
     * @param fromIndex he index of the array at which to begin the search. The default is 0, which will search the whole array.
     */
    inArray<T>(value: T, array: T[], fromIndex?: number): number;

    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     */
    isArray(obj: any): boolean;
    /**
     * Check to see if an object is empty (contains no enumerable properties).
     *
     * @param obj The object that will be checked to see if it's empty.
     */
    isEmptyObject(obj: any): boolean;
    /**
     * Determine if the argument passed is a Javascript function object.
     *
     * @param obj Object to test whether or not it is a function.
     */
    isFunction(obj: any): boolean;
    /**
     * Determines whether its argument is a number.
     *
     * @param obj The value to be tested.
     */
    isNumeric(value: any): boolean;
    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param obj The object that will be checked to see if it's a plain object.
     */
    isPlainObject(obj: any): boolean;
    /**
     * Determine whether the argument is a window.
     *
     * @param obj Object to test whether or not it is a window.
     */
    isWindow(obj: any): boolean;
    /**
     * Check to see if a DOM node is within an XML document (or is an XML document).
     *
     * @param node he DOM node that will be checked to see if it's in an XML document.
     */
    isXMLDoc(node: Node): boolean;

    /**
     * Convert an array-like object into a true JavaScript array.
     * 
     * @param obj Any object to turn into a native Array.
     */
    makeArray(obj: any): any[];

    /**
     * Translate all items in an array or object to new array of items.
     * 
     * @param array The Array to translate.
     * @param callback The function to process each item against. The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.
     */
    map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
    /**
     * Translate all items in an array or object to new array of items.
     * 
     * @param arrayOrObject The Array or Object to translate.
     * @param callback The function to process each item against. The first argument to the function is the value; the second argument is the index or key of the array or object property. The function can return any value to add to the array. A returned array will be flattened into the resulting array. Within the function, this refers to the global (window) object.
     */
    map(arrayOrObject: any, callback: (value: any, indexOrKey: any) => any): any;

    /**
     * Merge the contents of two arrays together into the first array.
     * 
     * @param first The first array to merge, the elements of second added.
     * @param second The second array to merge into the first, unaltered.
     */
    merge<T>(first: T[], second: T[]): T[];

    /**
     * An empty function.
     */
    noop(): any;

    /**
     * Return a number representing the current time.
     */
    now(): number;

    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript object.
     * 
     * @param json The JSON string to parse.
     */
    parseJSON(json: string): any;

    /**
     * Parses a string into an XML document.
     *
     * @param data a well-formed XML string to be parsed
     */
    parseXML(data: string): XMLDocument;

    /**
     * Remove the whitespace from the beginning and end of a string.
     * 
     * @param str Remove the whitespace from the beginning and end of a string.
     */
    trim(str: string): string;

    /**
     * Determine the internal JavaScript [[Class]] of an object.
     * 
     * @param obj Object to get the internal JavaScript [[Class]] of.
     */
    type(obj: any): string;

    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
     * 
     * @param array The Array of DOM elements.
     */
    unique(array: Element[]): Element[];

    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context DOM element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     */
    parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[];

    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context DOM element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     */
    parseHTML(data: string, context?: Document, keepScripts?: boolean): any[];
}

/**
 * The jQuery instance members
 */
interface JQuery {
    /**
     * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
     *
     * @param handler The function to be invoked.
     */
    ajaxComplete(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any) => any): JQuery;
    /**
     * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     */
    ajaxError(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any) => any): JQuery;
    /**
     * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     */
    ajaxSend(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings) => any): JQuery;
    /**
     * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     */
    ajaxStart(handler: () => any): JQuery;
    /**
     * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     */
    ajaxStop(handler: () => any): JQuery;
    /**
     * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     */
    ajaxSuccess(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings) => any): JQuery;

    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param complete A callback function that is executed when the request completes.
     */
    load(url: string, data?: string|Object, complete?: (responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest) => any): JQuery;

    /**
     * Encode a set of form elements as a string for submission.
     */
    serialize(): string;
    /**
     * Encode a set of form elements as an array of names and values.
     */
    serializeArray(): JQuerySerializeArrayElement[];

    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     */
    addClass(className: string): JQuery;
    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param function A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.
     */
    addClass(func: (index: number, className: string) => string): JQuery;

    /**
     * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
     */
    addBack(selector?: string): JQuery;

    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     */
    attr(attributeName: string): string;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute.
     */
    attr(attributeName: string, value: string|number): JQuery;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old attribute value as arguments.
     */
    attr(attributeName: string, func: (index: number, attr: string) => string|number): JQuery;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     */
    attr(attributes: Object): JQuery;
    
    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param className The class name to search for.
     */
    hasClass(className: string): boolean;

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     */
    html(): string;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     */
    html(htmlString: string): JQuery;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     */
    html(func: (index: number, oldhtml: string) => string): JQuery;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     */

    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     */
    prop(propertyName: string): any;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     */
    prop(propertyName: string, value: string|number|boolean): JQuery;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     */
    prop(properties: Object): JQuery;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param func A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword this refers to the current element.
     */
    prop(propertyName: string, func: (index: number, oldPropertyValue: any) => any): JQuery;

    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
     */
    removeAttr(attributeName: string): JQuery;

    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     */
    removeClass(className?: string): JQuery;
    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param function A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.
     */
    removeClass(func: (index: number, className: string) => string): JQuery;

    /**
     * Remove a property for the set of matched elements.
     *
     * @param propertyName The name of the property to remove.
     */
    removeProp(propertyName: string): JQuery;

    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     */
    toggleClass(className: string, swtch?: boolean): JQuery;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param swtch A boolean value to determine whether the class should be added or removed.
     */
    toggleClass(swtch?: boolean): JQuery;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param func A function that returns class names to be toggled in the class attribute of each element in the matched set. Receives the index position of the element in the set, the old class value, and the switch as arguments.
     * @param swtch A boolean value to determine whether the class should be added or removed.
     */
    toggleClass(func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean): JQuery;

    /**
     * Get the current value of the first element in the set of matched elements.
     */
    val(): any;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, an array of strings or number corresponding to the value of each matched element to set as selected/checked.
     */
    val(value: string|string[]|number): JQuery;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     */
    val(func: (index: number, value: string) => string): JQuery;


    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     */
    css(propertyName: string): string;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     */
    css(propertyName: string, value: string|number): JQuery;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     */
    css(propertyName: string, value: (index: number, value: string) => string|number): JQuery;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     */
    css(properties: Object): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements.
     */
    height(): number;
    /**
     * Set the CSS height of every matched element.
     *
     * @param value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
     */
    height(value: number|string): JQuery;
    /**
     * Set the CSS height of every matched element.
     *
     * @param func A function returning the height to set. Receives the index position of the element in the set and the old height as arguments. Within the function, this refers to the current element in the set.
     */
    height(func: (index: number, height: number) => number|string): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements, including padding but not border.
     */
    innerHeight(): number;

    /**
     * Sets the inner height on elements in the set of matched elements, including padding but not border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    innerHeight(height: number|string): JQuery;
    
    /**
     * Get the current computed width for the first element in the set of matched elements, including padding but not border.
     */
    innerWidth(): number;

    /**
     * Sets the inner width on elements in the set of matched elements, including padding but not border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    innerWidth(width: number|string): JQuery;
    
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the document.
     */
    offset(): JQueryCoordinates;
    /**
     * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     *
     * @param coordinates An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     */
    offset(coordinates: JQueryCoordinates): JQuery;
    /**
     * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     *
     * @param func A function to return the coordinates to set. Receives the index of the element in the collection as the first argument and the current coordinates as the second argument. The function should return an object with the new top and left properties.
     */
    offset(func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     */
    outerHeight(includeMargin?: boolean): number;

    /**
     * Sets the outer height on elements in the set of matched elements, including padding and border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    outerHeight(height: number|string): JQuery;

    /**
     * Get the current computed width for the first element in the set of matched elements, including padding and border.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     */
    outerWidth(includeMargin?: boolean): number;

    /**
     * Sets the outer width on elements in the set of matched elements, including padding and border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    outerWidth(width: number|string): JQuery;

    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     */
    position(): JQueryCoordinates;

    /**
     * Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
     */
    scrollLeft(): number;
    /**
     * Set the current horizontal position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     */
    scrollLeft(value: number): JQuery;

    /**
     * Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
     */
    scrollTop(): number;
    /**
     * Set the current vertical position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     */
    scrollTop(value: number): JQuery;

    /**
     * Get the current computed width for the first element in the set of matched elements.
     */
    width(): number;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    width(value: number|string): JQuery;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param func A function returning the width to set. Receives the index position of the element in the set and the old width as arguments. Within the function, this refers to the current element in the set.
     */
    width(func: (index: number, width: number) => number|string): JQuery;

    /**
     * Remove from the queue all items that have not yet been run.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    clearQueue(queueName?: string): JQuery;

    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any Javascript type including Array or Object.
     */
    data(key: string, value: any): JQuery;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     */
    data(key: string): any;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param obj An object of key-value pairs of data to update.
     */
    data(obj: { [key: string]: any; }): JQuery;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     */
    data(): any;

    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    dequeue(queueName?: string): JQuery;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
     */
    removeData(name: string): JQuery;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param list An array of strings naming the pieces of data to delete.
     */
    removeData(list: string[]): JQuery;
    /**
     * Remove all previously-stored piece of data.
     */
    removeData(): JQuery;

    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed. (default: fx)
     * @param target Object onto which the promise methods have to be attached
     */
    promise(type?: string, target?: Object): JQueryPromise<any>;

    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    animate(properties: Object, duration?: string|number, complete?: Function): JQuery;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition. (default: swing)
     * @param complete A function to call once the animation is complete.
     */
    animate(properties: Object, duration?: string|number, easing?: string, complete?: Function): JQuery;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param options A map of additional options to pass to the method.
     */
    animate(properties: Object, options: JQueryAnimationOptions): JQuery;

    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    delay(duration: number, queueName?: string): JQuery;

    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    fadeIn(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    fadeIn(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param options A map of additional options to pass to the method.
     */
    fadeIn(options: JQueryAnimationOptions): JQuery;

    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    fadeOut(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    fadeOut(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param options A map of additional options to pass to the method.
     */
    fadeOut(options: JQueryAnimationOptions): JQuery;

    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param complete A function to call once the animation is complete.
     */
    fadeTo(duration: string|number, opacity: number, complete?: Function): JQuery;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    fadeTo(duration: string|number, opacity: number, easing?: string, complete?: Function): JQuery;

    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    fadeToggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    fadeToggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param options A map of additional options to pass to the method.
     */
    fadeToggle(options: JQueryAnimationOptions): JQuery;

    /**
     * Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     */
    finish(queue?: string): JQuery;

    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    hide(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    hide(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     */
    hide(options: JQueryAnimationOptions): JQuery;

    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    show(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    show(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     */
    show(options: JQueryAnimationOptions): JQuery;

    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    slideDown(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    slideDown(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     */
    slideDown(options: JQueryAnimationOptions): JQuery;

    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    slideToggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    slideToggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     */
    slideToggle(options: JQueryAnimationOptions): JQuery;

    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    slideUp(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    slideUp(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     */
    slideUp(options: JQueryAnimationOptions): JQuery;

    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     */
    stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     */
    stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;

    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     */
    toggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     */
    toggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     */
    toggle(options: JQueryAnimationOptions): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param showOrHide A Boolean indicating whether to show or hide the elements.
     */
    toggle(showOrHide: boolean): JQuery;

    /**
     * Attach a handler to an event for the elements.
     * 
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    bind(eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements.
     * 
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     */
    bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements.
     * 
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
     */
    bind(eventType: string, eventData: any, preventBubble: boolean): JQuery;
    /**
     * Attach a handler to an event for the elements.
     * 
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
     */
    bind(eventType: string, preventBubble: boolean): JQuery;
    /**
     * Attach a handler to an event for the elements.
     * 
     * @param events An object containing one or more DOM event types and functions to execute for them.
     */
    bind(events: any): JQuery;

    /**
     * Trigger the "blur" event on an element
     */
    blur(): JQuery;
    /**
     * Bind an event handler to the "blur" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    blur(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "blur" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "change" event on an element.
     */
    change(): JQuery;
    /**
     * Bind an event handler to the "change" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    change(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "change" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "click" event on an element.
     */
    click(): JQuery;
    /**
     * Bind an event handler to the "click" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     */
    click(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "click" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "dblclick" event on an element.
     */
    dblclick(): JQuery;
    /**
     * Bind an event handler to the "dblclick" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "dblclick" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    delegate(selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focus" event on an element.
     */
    focus(): JQuery;
    /**
     * Bind an event handler to the "focus" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    focus(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focus" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focusin" event on an element.
     */
    focusin(): JQuery;
    /**
     * Bind an event handler to the "focusin" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focusin" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    focusin(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focusout" event on an element.
     */
    focusout(): JQuery;
    /**
     * Bind an event handler to the "focusout" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focusout" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    focusout(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
     *
     * @param handlerIn A function to execute when the mouse pointer enters the element.
     * @param handlerOut A function to execute when the mouse pointer leaves the element.
     */
    hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
     *
     * @param handlerInOut A function to execute when the mouse pointer enters or leaves the element.
     */
    hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "keydown" event on an element.
     */
    keydown(): JQuery;
    /**
     * Bind an event handler to the "keydown" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keydown" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Trigger the "keypress" event on an element.
     */
    keypress(): JQuery;
    /**
     * Bind an event handler to the "keypress" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keypress" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Trigger the "keyup" event on an element.
     */
    keyup(): JQuery;
    /**
     * Bind an event handler to the "keyup" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keyup" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Bind an event handler to the "load" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    load(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "load" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "mousedown" event on an element.
     */
    mousedown(): JQuery;
    /**
     * Bind an event handler to the "mousedown" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mousedown" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mousedown(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseenter" event on an element.
     */
    mouseenter(): JQuery;
    /**
     * Bind an event handler to be fired when the mouse enters an element.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to be fired when the mouse enters an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mouseenter(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseleave" event on an element.
     */
    mouseleave(): JQuery;
    /**
     * Bind an event handler to be fired when the mouse leaves an element.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to be fired when the mouse leaves an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mouseleave(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mousemove" event on an element.
     */
    mousemove(): JQuery;
    /**
     * Bind an event handler to the "mousemove" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mousemove" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mousemove(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseout" event on an element.
     */
    mouseout(): JQuery;
    /**
     * Bind an event handler to the "mouseout" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseout" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mouseout(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseover" event on an element.
     */
    mouseover(): JQuery;
    /**
     * Bind an event handler to the "mouseover" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseover" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mouseover(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseup" event on an element.
     */
    mouseup(): JQuery;
    /**
     * Bind an event handler to the "mouseup" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     */
    mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseup" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    mouseup(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     */
    off(): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     */
    off(events: { [key: string]: any; }, selector?: string): JQuery;

    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: string, data : any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     */
    on(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     */
    on(events: { [key: string]: any; }, data?: any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute at the time the event is triggered.
     */
    one(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param data An object containing data that will be passed to the event handler.
     * @param handler A function to execute at the time the event is triggered.
     */
    one(events: string, data: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    one(events: string, selector: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    one(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     */
    one(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     */
    one(events: { [key: string]: any; }, data?: any): JQuery;


    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     */
    ready(handler: (jQueryAlias?: JQueryStatic) => any): JQuery;

    /**
     * Trigger the "resize" event on an element.
     */
    resize(): JQuery;
    /**
     * Bind an event handler to the "resize" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     */
    resize(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "resize" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    resize(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "scroll" event on an element.
     */
    scroll(): JQuery;
    /**
     * Bind an event handler to the "scroll" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     */
    scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "scroll" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    scroll(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "select" event on an element.
     */
    select(): JQuery;
    /**
     * Bind an event handler to the "select" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     */
    select(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "select" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    select(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "submit" event on an element.
     */
    submit(): JQuery;
    /**
     * Bind an event handler to the "submit" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     */
    submit(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "submit" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     */
    submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     * 
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters Additional parameters to pass along to the event handler.
     */
    trigger(eventType: string, extraParameters?: any[]|Object): JQuery;
    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     * 
     * @param event A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     */
    trigger(event: JQueryEventObject, extraParameters?: any[]|Object): JQuery;

    /**
     * Execute all handlers attached to an element for an event.
     * 
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     */
    triggerHandler(eventType: string, ...extraParameters: any[]): Object;

    /**
     * Execute all handlers attached to an element for an event.
     * 
     * @param event A jQuery.Event object.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     */
    triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object;

    /**
     * Remove a previously-attached event handler from the elements.
     * 
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param handler The function that is to be no longer executed.
     */
    unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove a previously-attached event handler from the elements.
     * 
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param fls Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
     */
    unbind(eventType: string, fls: boolean): JQuery;
    /**
     * Remove a previously-attached event handler from the elements.
     * 
     * @param evt A JavaScript event object as passed to an event handler.
     */
    unbind(evt: any): JQuery;

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     */
    undelegate(): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     * 
     * @param selector A selector which will be used to filter the event results.
     * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
     * @param handler A function to execute at the time the event is triggered.
     */
    undelegate(selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     * 
     * @param selector A selector which will be used to filter the event results.
     * @param events An object of one or more event types and previously bound functions to unbind from them.
     */
    undelegate(selector: string, events: Object): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     * 
     * @param namespace A string containing a namespace to unbind all events from.
     */
    undelegate(namespace: string): JQuery;

    /**
     * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
     * 
     * @param handler A function to execute when the event is triggered.
     */
    unload(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
     * 
     * @param eventData A plain object of data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document. (DEPRECATED from v1.10)
     */
    context: Element;

    jquery: string;

    /**
     * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
     * 
     * @param handler A function to execute when the event is triggered.
     */
    error(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
     * 
     * @param eventData A plain object of data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     */
    error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Add a collection of DOM elements onto the jQuery stack.
     * 
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     */
    pushStack(elements: any[]): JQuery;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     * 
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @param name The name of a jQuery method that generated the array of elements.
     * @param arguments The arguments that were passed in to the jQuery method (for serialization).
     */
    pushStack(elements: any[], name: string, arguments: any[]): JQuery;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     * 
     * param content1 HTML string, DOM element, array of elements, or jQuery object to insert after each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
     */
    after(content1: JQuery|any[]|Element|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     * 
     * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     */
    after(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     * 
     * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
     */
    append(content1: JQuery|any[]|Element|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     * 
     * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     */
    append(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert every element in the set of matched elements to the end of the target.
     * 
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
     */
    appendTo(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     * 
     * param content1 HTML string, DOM element, array of elements, or jQuery object to insert before each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
     */
    before(content1: JQuery|any[]|Element|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     * 
     * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert before each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     */
    before(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Create a deep copy of the set of matched elements.
     * 
     * param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false.
     * param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
     */
    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;

    /**
     * Remove the set of matched elements from the DOM.
     * 
     * param selector A selector expression that filters the set of matched elements to be removed.
     */
    detach(selector?: string): JQuery;

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     */
    empty(): JQuery;

    /**
     * Insert every element in the set of matched elements after the target.
     * 
     * param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
     */
    insertAfter(target: JQuery|any[]|Element|Text|string): JQuery;

    /**
     * Insert every element in the set of matched elements before the target.
     * 
     * param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
     */
    insertBefore(target: JQuery|any[]|Element|Text|string): JQuery;

    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     * 
     * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
     */
    prepend(content1: JQuery|any[]|Element|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     * 
     * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     */
    prepend(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     * 
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
     */
    prependTo(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Remove the set of matched elements from the DOM.
     * 
     * @param selector A selector expression that filters the set of matched elements to be removed.
     */
    remove(selector?: string): JQuery;

    /**
     * Replace each target element with the set of matched elements.
     * 
     * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
     */
    replaceAll(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     * 
     * param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     */
    replaceWith(newContent: JQuery|any[]|Element|Text|string): JQuery;
    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     * 
     * param func A function that returns content with which to replace the set of matched elements.
     */
    replaceWith(func: () => Element|JQuery): JQuery;

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     */
    text(): string;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     * 
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     */
    text(text: string|number|boolean): JQuery;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     * 
     * @param func A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
     */
    text(func: (index: number, text: string) => string): JQuery;

    /**
     * Retrieve all the elements contained in the jQuery set, as an array.
     */
    toArray(): any[];

    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     */
    unwrap(): JQuery;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     * 
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     */
    wrap(wrappingElement: JQuery|Element|string): JQuery;
    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     * 
     * @param func A callback function returning the HTML content or jQuery object to wrap around the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     */
    wrap(func: (index: number) => string|JQuery): JQuery;

    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     * 
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     */
    wrapAll(wrappingElement: JQuery|Element|string): JQuery;
    wrapAll(func: (index: number) => string): JQuery;

    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     * 
     * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
     */
    wrapInner(wrappingElement: JQuery|Element|string): JQuery;
    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     * 
     * @param func A callback function which generates a structure to wrap around the content of the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     */
    wrapInner(func: (index: number) => string): JQuery;

    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     * 
     * @param func A function to execute for each matched element.
     */
    each(func: (index: number, elem: Element) => any): JQuery;

    /**
     * Retrieve one of the elements matched by the jQuery object.
     * 
     * @param index A zero-based integer indicating which element to retrieve.
     */
    get(index: number): HTMLElement;
    /**
     * Retrieve the elements matched by the jQuery object.
     */
    get(): any[];

    /**
     * Search for a given element from among the matched elements.
     */
    index(): number;
    /**
     * Search for a given element from among the matched elements.
     * 
     * @param selector A selector representing a jQuery collection in which to look for an element.
     */
    index(selector: string|JQuery|Element): number;

    /**
     * The number of elements in the jQuery object.
     */
    length: number;
    /**
     * A selector representing selector passed to jQuery(), if any, when creating the original set.
     * version deprecated: 1.7, removed: 1.9
     */
    selector: string;
    [index: string]: any;
    [index: number]: HTMLElement;

    /**
     * Add elements to the set of matched elements.
     * 
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     * @param context The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.
     */
    add(selector: string, context?: Element): JQuery;
    /**
     * Add elements to the set of matched elements.
     * 
     * @param elements One or more elements to add to the set of matched elements.
     */
    add(...elements: Element[]): JQuery;
    /**
     * Add elements to the set of matched elements.
     * 
     * @param html An HTML fragment to add to the set of matched elements.
     */
    add(html: string): JQuery;
    /**
     * Add elements to the set of matched elements.
     * 
     * @param obj An existing jQuery object to add to the set of matched elements.
     */
    add(obj: JQuery): JQuery;

    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    children(selector?: string): JQuery;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    closest(selector: string): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * 
     * @param selector A string containing a selector expression to match elements against.
     * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
     */
    closest(selector: string, context?: Element): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * 
     * @param obj A jQuery object to match elements against.
     */
    closest(obj: JQuery): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * 
     * @param element An element to match elements against.
     */
    closest(element: Element): JQuery;

    /**
     * Get an array of all the elements and selectors matched against the current element up through the DOM tree.
     * 
     * @param selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
     * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
     */
    closest(selectors: any, context?: Element): any[];

    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     */
    contents(): JQuery;

    /**
     * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
     */
    end(): JQuery;

    /**
     * Reduce the set of matched elements to the one at the specified index.
     * 
     * @param index An integer indicating the 0-based position of the element. OR An integer indicating the position of the element, counting backwards from the last element in the set.
     *  
     */
    eq(index: number): JQuery;

    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     * 
     * @param selector A string containing a selector expression to match the current set of elements against.
     */
    filter(selector: string): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     * 
     * @param func A function used as a test for each element in the set. this is the current DOM element.
     */
    filter(func: (index: number, element: Element) => any): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     * 
     * @param element An element to match the current set of elements against.
     */
    filter(element: Element): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     * 
     * @param obj An existing jQuery object to match the current set of elements against.
     */
    filter(obj: JQuery): JQuery;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    find(selector: string): JQuery;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     * 
     * @param element An element to match elements against.
     */
    find(element: Element): JQuery;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     * 
     * @param obj A jQuery object to match elements against.
     */
    find(obj: JQuery): JQuery;

    /**
     * Reduce the set of matched elements to the first in the set.
     */
    first(): JQuery;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    has(selector: string): JQuery;
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     * 
     * @param contained A DOM element to match elements against.
     */
    has(contained: Element): JQuery;

    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    is(selector: string): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     * 
     * @param func A function used as a test for the set of elements. It accepts one argument, index, which is the element's index in the jQuery collection.Within the function, this refers to the current DOM element.
     */
    is(func: (index: number, element: Element) => boolean): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     * 
     * @param obj An existing jQuery object to match the current set of elements against.
     */
    is(obj: JQuery): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     * 
     * @param elements One or more elements to match the current set of elements against.
     */
    is(elements: any): boolean;

    /**
     * Reduce the set of matched elements to the final one in the set.
     */
    last(): JQuery;

    /**
     * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
     * 
     * @param callback A function object that will be invoked for each element in the current set.
     */
    map(callback: (index: number, domElement: Element) => any): JQuery;

    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    next(selector?: string): JQuery;

    /**
     * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    nextAll(selector?: string): JQuery;

    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     * 
     * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    nextUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     * 
     * @param element A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    nextUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     * 
     * @param obj A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    nextUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Remove elements from the set of matched elements.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    not(selector: string): JQuery;
    /**
     * Remove elements from the set of matched elements.
     * 
     * @param func A function used as a test for each element in the set. this is the current DOM element.
     */
    not(func: (index: number, element: Element) => boolean): JQuery;
    /**
     * Remove elements from the set of matched elements.
     * 
     * @param elements One or more DOM elements to remove from the matched set.
     */
    not(elements: Element|Element[]): JQuery;
    /**
     * Remove elements from the set of matched elements.
     * 
     * @param obj An existing jQuery object to match the current set of elements against.
     */
    not(obj: JQuery): JQuery;

    /**
     * Get the closest ancestor element that is positioned.
     */
    offsetParent(): JQuery;

    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    parent(selector?: string): JQuery;

    /**
     * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    parents(selector?: string): JQuery;

    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    parentsUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param element A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    parentsUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param obj A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    parentsUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    prev(selector?: string): JQuery;

    /**
     * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    prevAll(selector?: string): JQuery;

    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    prevUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param element A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    prevUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param obj A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    prevUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    siblings(selector?: string): JQuery;

    /**
     * Reduce the set of matched elements to a subset specified by a range of indices.
     * 
     * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
     * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
     */
    slice(start: number, end?: number): JQuery;

    /**
     * Show the queue of functions to be executed on the matched elements.
     * 
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     */
    queue(queueName?: string): any[];
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     * 
     * @param newQueue An array of functions to replace the current queue contents.
     */
    queue(newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     * 
     * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
     */
    queue(callback: Function): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     * 
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue An array of functions to replace the current queue contents.
     */
    queue(queueName: string, newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     * 
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
     */
    queue(queueName: string, callback: Function): JQuery;
}
declare module "jquery" {
    export = $;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;
// Type definitions for request
// Project: https://github.com/mikeal/request
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, bonnici <https://github.com/bonnici>, Bart van der Schoor <https://github.com/Bartvds>, Joe Skeen <http://github.com/joeskeen>, Christopher Currens <https://github.com/ccurrens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference path="../node/node.d.ts" />
/// <reference path="../form-data/form-data.d.ts" />

declare module 'request' {
	import stream = require('stream');
	import http = require('http');
	import FormData = require('form-data');
	import url = require('url');
	import fs = require('fs');

	namespace request {
		export interface RequestAPI<TRequest extends Request,
			TOptions extends CoreOptions,
			TUriUrlOptions> {

			defaults(options: TOptions): RequestAPI<TRequest, TOptions, RequiredUriUrl>;
			defaults(options: RequiredUriUrl & TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>;

			(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			(uri: string, callback?: RequestCallback): TRequest;
			(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			get(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			get(uri: string, callback?: RequestCallback): TRequest;
			get(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			post(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			post(uri: string, callback?: RequestCallback): TRequest;
			post(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			put(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			put(uri: string, callback?: RequestCallback): TRequest;
			put(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			head(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			head(uri: string, callback?: RequestCallback): TRequest;
			head(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			patch(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			patch(uri: string, callback?: RequestCallback): TRequest;
			patch(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			del(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
			del(uri: string, callback?: RequestCallback): TRequest;
			del(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

			forever(agentOptions: any, optionsArg: any): TRequest;
			jar(): CookieJar;
			cookie(str: string): Cookie;

			initParams: any;
			debug: boolean;
		}

		interface DefaultUriUrlRequestApi<TRequest extends Request,
			TOptions extends CoreOptions,
			TUriUrlOptions>	extends RequestAPI<TRequest, TOptions, TUriUrlOptions> {
				
			defaults(options: TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>;
			(): TRequest;
			get(): TRequest;
			post(): TRequest;
			put(): TRequest;
			head(): TRequest;
			patch(): TRequest;
			del(): TRequest;
		}

		interface CoreOptions {
			baseUrl?: string;
			callback?: (error: any, response: http.IncomingMessage, body: any) => void;
			jar?: any; // CookieJar
			formData?: any; // Object
			form?: any; // Object or string
			auth?: AuthOptions;
			oauth?: OAuthOptions;
			aws?: AWSOptions;
			hawk?: HawkOptions;
			qs?: any;
			json?: any;
			multipart?: RequestPart[] | Multipart;
			agentOptions?: any;
			agentClass?: any;
			forever?: any;
			host?: string;
			port?: number;
			method?: string;
			headers?: Headers;
			body?: any;
			followRedirect?: boolean | ((response: http.IncomingMessage) => boolean);
			followAllRedirects?: boolean;
			maxRedirects?: number;
			encoding?: string;
			pool?: any;
			timeout?: number;
			proxy?: any;
			strictSSL?: boolean;
			gzip?: boolean;
			preambleCRLF?: boolean;
			postambleCRLF?: boolean;
			key?: Buffer;
			cert?: Buffer;
			passphrase?: string;
			ca?: Buffer;
			har?: HttpArchiveRequest;
			useQuerystring?: boolean;
		}

		interface UriOptions {
			uri: string;
		}
		interface UrlOptions {
			url: string;
		}
		export type RequiredUriUrl = UriOptions | UrlOptions;

		interface OptionalUriUrl {
			uri?: string;
			url?: string;
		}
		export type Options = RequiredUriUrl & CoreOptions;

		export interface RequestCallback {
			(error: any, response: http.IncomingMessage, body: any): void;
		}

		export interface HttpArchiveRequest {
			url?: string;
			method?: string;
			headers?: NameValuePair[];
			postData?: {
				mimeType?: string;
				params?: NameValuePair[];
			}
		}

		export interface NameValuePair {
			name: string;
			value: string;
		}

		export interface Multipart {
			chunked?: boolean;
			data?: {
				'content-type'?: string,
				body: string
			}[];
		}

		export interface RequestPart {
			headers?: Headers;
			body: any;
		}

		export interface Request extends stream.Stream {
			readable: boolean;
			writable: boolean;

			getAgent(): http.Agent;
			//start(): void;
			//abort(): void;
			pipeDest(dest: any): void;
			setHeader(name: string, value: string, clobber?: boolean): Request;
			setHeaders(headers: Headers): Request;
			qs(q: Object, clobber?: boolean): Request;
			form(): FormData.FormData;
			form(form: any): Request;
			multipart(multipart: RequestPart[]): Request;
			json(val: any): Request;
			aws(opts: AWSOptions, now?: boolean): Request;
			auth(username: string, password: string, sendInmediately?: boolean, bearer?: string): Request;
			oauth(oauth: OAuthOptions): Request;
			jar(jar: CookieJar): Request;

			on(event: string, listener: Function): Request;
			on(event: 'request', listener: (req: http.ClientRequest) => void): Request;
			on(event: 'response', listener: (resp: http.IncomingMessage) => void): Request;
			on(event: 'data', listener: (data: Buffer | string) => void): Request;
			on(event: 'error', listener: (e: Error) => void): Request;
			on(event: 'complete', listener: (resp: http.IncomingMessage, body?: string | Buffer) => void): Request;

			write(buffer: Buffer, cb?: Function): boolean;
			write(str: string, cb?: Function): boolean;
			write(str: string, encoding: string, cb?: Function): boolean;
			write(str: string, encoding?: string, fd?: string): boolean;
			end(): void;
			end(chunk: Buffer, cb?: Function): void;
			end(chunk: string, cb?: Function): void;
			end(chunk: string, encoding: string, cb?: Function): void;
			pause(): void;
			resume(): void;
			abort(): void;
			destroy(): void;
			toJSON(): Object;
		}

		export interface Headers {
			[key: string]: any;
		}

		export interface AuthOptions {
			user?: string;
			username?: string;
			pass?: string;
			password?: string;
			sendImmediately?: boolean;
			bearer?: string;
		}

		export interface OAuthOptions {
			callback?: string;
			consumer_key?: string;
			consumer_secret?: string;
			token?: string;
			token_secret?: string;
			verifier?: string;
		}

		export interface HawkOptions {
			credentials: any;
		}

		export interface AWSOptions {
			secret: string;
			bucket?: string;
		}

		export interface CookieJar {
			setCookie(cookie: Cookie, uri: string | url.Url, options?: any): void
			getCookieString(uri: string | url.Url): string
			getCookies(uri: string | url.Url): Cookie[]
		}

		export interface CookieValue {
			name: string;
			value: any;
			httpOnly: boolean;
		}

		export interface Cookie extends Array<CookieValue> {
			constructor(name: string, req: Request): void;
			str: string;
			expires: Date;
			path: string;
			toString(): string;
		}
	}
	var request: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
	export = request;
}
// Type definitions for PhantomJS bridge for NodeJS 0.7.0
// Project: https://github.com/sgentle/phantomjs-node
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "phantom" {

  function create(callback: (ph: PhantomJS) => void): void;
  function create(options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg: string, callback: (ph: PhantomJS) => void): void;
  function create(arg: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, arg3: string, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, arg3: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;

  interface PhantomJS {
    createPage(callback: (page: WebPage) => void): void;
    exit(returnValue?: number): void;
    injectJs(filename: string, callback?: (result: boolean) => void): void;

    addCookie(name: string, value: string, domain: string, callback?: (res: boolean) => void): void;
    clearCookies(callback?: () => void): void;
    getCookies(callback: (cookies: { name: string; value: string; domain?: string; }[]) => void): void;
  }

  interface WebPage {
    open(url: string, callback: (status: string) => void): void;
    close(): void;

    get(key: string, callback: (result: any) => void): void;
    set(key: string, value: any, callback?: (result: any) => void): void;
    setHeaders(headers: Object, callback?: () => void): void;
    setViewportSize(width: number, height: number, callback?: () => void): void;
    setPaperSize(options: IPaperSizeOptions, callback?: () => void): void;
    setZoomFactor(factor: number, callback?: () => void): void;

    evaluate(callback: () => void): void;
    evaluate<R>(callback: () => R, returnCallback: (result: R) => void): void;
    evaluate<T>(callback: (arg: T) => void, returnCallback: () => void, arg: T): void;
    evaluate<T, R>(callback: (arg: T) => R, returnCallback: (result: R) => void, arg: T): void;
    evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, returnCallback: (result: R) => void, arg1: T1, arg2: T2): void;
    evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, returnCallback: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): void;
    includeJs(url: string, callback?: () => void): void;
    injectJs(filename: string, callback?: (res: boolean) => void): void;
    sendEvent(mouseEventType: string, mouseX: number, mouseY: number, button?: string): void;
    sendEvent(keyboardEventType: string, key: string, null1?: void, null2?: void, modifier?: number): void;
    uploadFile(selector: string, filename: string): void;

    render(filename: string, callback?: () => void): void;
    render(filename: string, options?: { format?: string; quality?: string; }, callback?: () => void): void;
    renderBase64(type: string, callback: (data: string) => void): void;

    goBack(): void;
    goForward(): void;
    reload(): void;

    getContent(callback: (content: string) => void): void;
    setContent(html: string, url: string, callback?: (status: string) => void): void;
    getCookies(callback: (cookies: { name: string; value: string; domain?: string; }[]) => void): void;
  }

  interface ICreateOptions {
    binary?: string;
    hostname?: string;
    path?: string;
    port?: number;
  }
  interface IPaperSizeOptions {
    width?: string;
    height?: string;
    format?: string;
    orientation?: string;
    margin?: any; // string | { top?: string; left?: string; bottom?: string; right?: string;  }
  }

}

// Type definitions for yargs
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "yargs" {

	module yargs {
		interface Argv {
			argv: any;
			(...args: any[]): any;
			parse(...args: any[]): any;

			reset(): Argv;

			locale(): string;
			locale(loc:string): Argv;
			
			detectLocale(detect:boolean): Argv;

			alias(shortName: string, longName: string): Argv;
			alias(aliases: { [shortName: string]: string }): Argv;
			alias(aliases: { [shortName: string]: string[] }): Argv;

			default(key: string, value: any): Argv;
			default(defaults: { [key: string]: any}): Argv;

			demand(key: string, msg: string): Argv;
			demand(key: string, required?: boolean): Argv;
			demand(keys: string[], msg: string): Argv;
			demand(keys: string[], required?: boolean): Argv;
			demand(positionals: number, required?: boolean): Argv;
			demand(positionals: number, msg: string): Argv;

			require(key: string, msg: string): Argv;
			require(key: string, required: boolean): Argv;
			require(keys: number[], msg: string): Argv;
			require(keys: number[], required: boolean): Argv;
			require(positionals: number, required: boolean): Argv;
			require(positionals: number, msg: string): Argv;

			required(key: string, msg: string): Argv;
			required(key: string, required: boolean): Argv;
			required(keys: number[], msg: string): Argv;
			required(keys: number[], required: boolean): Argv;
			required(positionals: number, required: boolean): Argv;
			required(positionals: number, msg: string): Argv;

			requiresArg(key: string): Argv;
			requiresArg(keys: string[]): Argv;

			describe(key: string, description: string): Argv;
			describe(descriptions: { [key: string]: string }): Argv;

			option(key: string, options: Options): Argv;
			option(options: { [key: string]: Options }): Argv;
			options(key: string, options: Options): Argv;
			options(options: { [key: string]: Options }): Argv;

			usage(message: string, options?: { [key: string]: Options }): Argv;
			usage(options?: { [key: string]: Options }): Argv;

			command(command: string, description: string): Argv;
			command(command: string, description: string, fn: (args: Argv) => void): Argv;

			completion(cmd: string, fn?: SyncCompletionFunction): Argv;
			completion(cmd: string, description?: string, fn?: SyncCompletionFunction): Argv;
			completion(cmd: string, fn?: AsyncCompletionFunction): Argv;
			completion(cmd: string, description?: string, fn?: AsyncCompletionFunction): Argv;

			example(command: string, description: string): Argv;

			check(func: (argv: any, aliases: { [alias: string]: string }) => any): Argv;

			boolean(key: string): Argv;
			boolean(keys: string[]): Argv;

			string(key: string): Argv;
			string(keys: string[]): Argv;

			choices(choices: Object): Argv;
			choices(key: string, values:any[]): Argv;

			config(key: string): Argv;
			config(keys: string[]): Argv;

			wrap(columns: number): Argv;

			strict(): Argv;

			help(): string;
			help(option: string, description?: string): Argv;

			epilog(msg: string): Argv;
			epilogue(msg: string): Argv;

			version(version: string, option?: string, description?: string): Argv;
			version(version: () => string, option?: string, description?: string): Argv;

			showHelpOnFail(enable: boolean, message?: string): Argv;

			showHelp(func?: (message: string) => any): Argv;

			exitProcess(enabled:boolean): Argv;

			/* Undocumented */

			normalize(key: string): Argv;
			normalize(keys: string[]): Argv;

			implies(key: string, value: string): Argv;
			implies(implies: { [key: string]: string }): Argv;

			count(key: string): Argv;
			count(keys: string[]): Argv;

			fail(func: (msg: string) => any): void;
		}

		interface Options {
			type?: string;
			alias?: any;
			demand?: any;
			required?: any;
			require?: any;
			default?: any;
			boolean?: any;
			string?: any;
			count?: any;
			describe?: any;
			description?: any;
			desc?: any;
			requiresArg?: any;
			choices?:string[];
		}

		type SyncCompletionFunction = (current: string, argv: any) => string[];
		type AsyncCompletionFunction = (current: string, argv: any, done: (completion: string[]) => void) => void;
	}

	var yargs: yargs.Argv;
	export = yargs;
}
/// <reference path="cheerio/cheerio.d.ts" />
/// <reference path="es6-promise/es6-promise.d.ts" />
/// <reference path="express/express.d.ts" />
/// <reference path="form-data/form-data.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="mime/mime.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="request/request.d.ts" />
/// <reference path="serve-static/serve-static.d.ts" />
/// <reference path="phantom/phantom.d.ts" />
/// <reference path="yargs/yargs.d.ts" />
