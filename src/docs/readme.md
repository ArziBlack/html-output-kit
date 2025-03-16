```typescript
import puppeteer from "puppeteer";
import * as htmlDocx from "html-docx-js";
import * as fs from "fs";
import { htmlTailwindContent } from "./html/html";
import TailwindToInline from "tailwindinline";
import { makeStylesInline } from "tailwind-to-inline";
import { chromium } from "playwright";
import { htmlContent } from "./html/html-2";

async function htmlToPdf(
  htmlContent: string,
  outputPath: string
): Promise<void> {
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

    await page.setContent(htmlContent);

    await page.pdf({
      path: outputPath,
      format: "A4",
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    });
    console.log("PDF saved to", outputPath);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function htmlToDocx(
  htmlContent: string,
  outputPath: string
): Promise<void> {
  const docx = htmlDocx.asBlob(htmlContent) as Blob;
  fs.writeFileSync(outputPath, Buffer.from(await docx.arrayBuffer()));
  console.log("Docx saved to", outputPath);
}

async function inLineConverter(htmlContent: string): Promise<string> {
  fs.writeFileSync("src/html/tailwind.html", htmlContent);
  const htmlTemplate = await makeStylesInline("src/html/tailwind.html");
  return htmlTemplate;
}

async function pdfGenerator(htmlContent: string): Promise<string> {
  const twi = new TailwindToInline();
  const inlineHtmlContent = await twi.convert(htmlContent);
  return inlineHtmlContent;
}

async function pdfGenerator2(
  htmlContent: string,
  outputPath: string
): Promise<void> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.pdf({ path: outputPath });
  console.log("PDF saved to", outputPath);
  await browser.close();
}

// Example usage:
async function main() {
  fs.mkdir("output", { recursive: true }, (err) => {
    if (err) {
      return console.error("Error creating folder:", err);
    }
    console.log("Folder created successfully!");
  });
  const inlineHtmlContent = await inLineConverter(htmlTailwindContent);
  console.log(inlineHtmlContent);
  fs.writeFileSync("output/inlineHtmlContent.html", inlineHtmlContent);
  htmlToPdf(inlineHtmlContent, "output/output-inline.pdf");
  htmlToPdf(htmlContent, "output/output-grid-inline.pdf");
  htmlToDocx(inlineHtmlContent, "output/output-inline.docx");
  htmlToDocx(htmlContent, "output/output-grid-inline.docx");
  await pdfGenerator(inlineHtmlContent);
  await pdfGenerator2(inlineHtmlContent, "output/playwright-output.pdf");
  await pdfGenerator2(htmlTailwindContent, "output/playwright-output-grid.pdf");
}

main();


```