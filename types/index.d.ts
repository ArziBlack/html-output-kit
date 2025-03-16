declare function htmlToPdf(htmlContent: string, outputPath: string): Promise<void>;
declare function htmlToDocx(htmlContent: string, outputPath: string): Promise<void>;
declare function inLineConverter(htmlContent: string): Promise<string>;
declare function pdfGenerator(htmlContent: string): Promise<string>;
declare function pdfGenerator2(htmlContent: string, outputPath: string): Promise<void>;
export { htmlToPdf, htmlToDocx, inLineConverter, pdfGenerator, pdfGenerator2 };
