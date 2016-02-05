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
