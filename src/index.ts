import puppeteer from "puppeteer";
import * as htmlDocx from "html-docx-js";
import * as fs from "fs";
import TailwindToInline from "tailwindinline";
import { makeStylesInline } from "tailwind-to-inline";
import { chromium } from "playwright";
import chalk from 'chalk';

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
    console.log(chalk.green("PDF saved to"), chalk.cyan(outputPath));
  } catch (error) {
    console.error(chalk.red("Error generating PDF:"), error);
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
  console.log(chalk.green("Docx saved to"), chalk.cyan(outputPath));
}

async function inLineConverter(htmlContent: string): Promise<string> {
  fs.writeFileSync("src/html/tailwind.html", htmlContent);
  const htmlTemplate = await makeStylesInline("src/html/tailwind.html");
  return htmlTemplate;
}

async function pdfGenerator(htmlContent: string): Promise<string> {
  const twi = new TailwindToInline();
  const inlineHtmlContent = await twi.convert(htmlContent);
  if (!inlineHtmlContent) throw new Error(chalk.red('Failed to convert HTML content'));
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
  console.log(chalk.green("PDF saved to"), chalk.cyan(outputPath));
  await browser.close();
}

export {
  htmlToPdf,
  htmlToDocx,
  inLineConverter,
  pdfGenerator,
  pdfGenerator2
};
