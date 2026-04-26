// @ts-nocheck
"use client";

import ImageResizer from "./ImageResizer";
import UnitConverter from "./UnitConverter";
import CaseConverter from "./CaseConverter";
import WordCounter from "./WordCounter";
import JSONFormatter from "./JSONFormatter";
import ColorPicker from "./ColorPicker";
import PercentageCalculator from "./PercentageCalculator";
import AgeCalculator from "./AgeCalculator";
import TimeCalculator from "./TimeCalculator";
import CSVtoJSON from "./CSVtoJSON";
import XMLFormatter from "./XMLFormatter";
import URLEncoder from "./URLEncoder";
import TextExtractor from "./TextExtractor";
import LoremIpsumGenerator from "./LoremIpsumGenerator";
import MarkdownPreviewer from "./MarkdownPreviewer";
import TextDiffChecker from "./TextDiffChecker";
import QRCodeTool from "./QRCodeTool";
import CurrencyConverter from "./CurrencyConverter";
import Base64Converter from "./Base64Converter";
import DataUriGenerator from "./DataUriGenerator";
import HashGenerator from "./HashGenerator";
import ImageToSvg from "./ImageToSvg";
import JwtDebugger from "./JwtDebugger";
import NutritionMaster from "./NutritionMaster";
import PasswordGenerator from "./PasswordGenerator";
import RemoveBackground from "./RemoveBackground";
import SslChecker from "./SslChecker";
import SvgConverter from "./SvgConverter";
import FaviconGenerator from "./FaviconGenerator";
import PDFImageExtractor from "./PDFImageExtractor";
import FileRenameTool from "./FileRenameTool";
import FileConverter from "./FileConverter";
import RegexGenerator from "./RegexGenerator";
import WebsiteCostCalculator from "./WebsiteCostCalculator";
import Mp4ToGif from "./Mp4ToGif";

const toolMap: Record<string, React.ComponentType> = {
  "image-resizer": ImageResizer,
  "color-picker": ColorPicker,
  "unit-converter": UnitConverter,
  "case-converter": CaseConverter,
  "currency-converter": CurrencyConverter,
  "base64-converter": Base64Converter,
  "word-counter": WordCounter,
  "json-formatter": JSONFormatter,
  "markdown-previewer": MarkdownPreviewer,
  "text-diff-checker": TextDiffChecker,
  "percentage-calculator": PercentageCalculator,
  "age-calculator": AgeCalculator,
  "time-calculator": TimeCalculator,
  "csv-to-json": CSVtoJSON,
  "xml-formatter": XMLFormatter,
  "url-encoder": URLEncoder,
  "text-extractor": TextExtractor,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "qr-code-tool": QRCodeTool,
  "ssl-checker": SslChecker,
  "svg-converter": SvgConverter,
  "image-to-svg": ImageToSvg,
  "nutrition-master": NutritionMaster,
  "remove-background": RemoveBackground,
  "hash-generator": HashGenerator,
  "password-generator": PasswordGenerator,
  "jwt-debugger": JwtDebugger,
  "data-uri-generator": DataUriGenerator,
  "favicon-generator": FaviconGenerator,
  "pdfImage-extractor": PDFImageExtractor,
  "file-rename-tool": FileRenameTool,
  "file-converter": FileConverter,
  "regex-generator": RegexGenerator,
  "website-cost-calculator": WebsiteCostCalculator,
  "mp4-to-gif": Mp4ToGif,
};

export default function ToolRenderer({ slug }: { slug: string }) {
  const ToolComponent = toolMap[slug];

  if (!ToolComponent) {
    return null;
  }

  return <ToolComponent />;
}
