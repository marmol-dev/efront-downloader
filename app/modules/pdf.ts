import * as PDFMerge from 'pdf-merge';

export default class PDF {
  private pdfMerge : PDFMerge;
  constructor(private paths: string[]){
    this.pdfMerge = new PDFMerge(paths, '/usr/bin/pdftk');
  }

  join(out: string) {
    return this.pdfMerge.asNewFile(out).promise();
  }
}
