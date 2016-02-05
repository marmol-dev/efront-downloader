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
