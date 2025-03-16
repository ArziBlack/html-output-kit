# Your Package Name

A package for converting HTML (with Tailwind support) to PDF and DOCX formats.

## Installation

```bash
npm install html-ouput-kit
```

```bash
yarn add html-ouput-kit
```

## Usage

```typescript
import { htmlToPdf, htmlToDocx, inLineConverter } from 'html-ouput-kit';

// Convert HTML to PDF
await htmlToPdf(htmlContent, 'output.pdf');

// Convert HTML to DOCX
await htmlToDocx(htmlContent, 'output.docx');

// Convert Tailwind HTML to inline styles
const inlineHtml = await inLineConverter(htmlContent);
```

## API

### htmlToPdf(htmlContent: string, outputPath: string): Promise<void>
Converts HTML content to PDF file.

### htmlToDocx(htmlContent: string, outputPath: string): Promise<void>
Converts HTML content to DOCX file.

### inLineConverter(htmlContent: string): Promise<string>
Converts Tailwind CSS classes to inline styles.

### pdfGenerator(htmlContent: string): Promise<void>
Alternative PDF generator

### pdfGenerator2(htmlContent: string, outputPath: string): Promise<void>
Alternative PDF generator
