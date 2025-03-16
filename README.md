# html-ouput-kit

A utility package to convert HTML content to PDF and DOCX with Tailwind CSS support.

## Features

- Convert HTML to PDF using Puppeteer or Playwright
- Convert HTML to DOCX
- Support for Tailwind CSS with inline styles conversion
- Colored console output for better visibility

## Installation

```bash
npm install html-ouput-kit
```

```bash
yarn add html-ouput-kit
```

## Usage

```typescript
import { htmlToPdf, htmlToDocx, inLineConverter, pdfGenerator, pdfGenerator2 } from 'html-ouput-kit';

// Convert HTML to PDF using Puppeteer
await htmlToPdf(htmlContent, 'output.pdf');

// Convert HTML to DOCX
await htmlToDocx(htmlContent, 'output.docx');

// Convert Tailwind CSS to inline styles
const inlineHtml = await inLineConverter(htmlContent);

// Convert HTML to PDF with Tailwind support
const inlineContent = await pdfGenerator(htmlContent);

// Convert HTML to PDF using Playwright
await pdfGenerator2(htmlContent, 'output.pdf');
```

## API

### `htmlToPdf(htmlContent: string, outputPath: string): Promise<void>`
Converts HTML content to PDF using Puppeteer.

### `htmlToDocx(htmlContent: string, outputPath: string): Promise<void>`
Converts HTML content to DOCX format.

### `inLineConverter(htmlContent: string): Promise<string>`
Converts Tailwind CSS classes to inline styles.

### `pdfGenerator(htmlContent: string): Promise<string>`
Converts HTML with Tailwind CSS to inline styles.

### `pdfGenerator2(htmlContent: string, outputPath: string): Promise<void>`
Converts HTML content to PDF using Playwright.

## License

MIT
