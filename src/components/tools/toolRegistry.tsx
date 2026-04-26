"use client";

import AgeCalculator from "./AgeCalculator";
import Base64Converter from "./Base64Converter";
import CSVtoJSON from "./CSVtoJSON";
import CaseConverter from "./CaseConverter";
import ColorPicker from "./ColorPicker";
import CurrencyConverter from "./CurrencyConverter";
import DataUriGenerator from "./DataUriGenerator";
import FaviconGenerator from "./FaviconGenerator";
import FileConverter from "./FileConverter";
import FileRenameTool from "./FileRenameTool";
import HashGenerator from "./HashGenerator";
import ImageResizer from "./ImageResizer";
import ImageToSvg from "./ImageToSvg";
import JSONFormatter from "./JSONFormatter";
import JwtDebugger from "./JwtDebugger";
import LoremIpsumGenerator from "./LoremIpsumGenerator";
import MarkdownPreviewer from "./MarkdownPreviewer";
import Mp4ToGif from "./Mp4ToGif";
import NutritionMaster from "./NutritionMaster";
import PDFImageExtractor from "./PDFImageExtractor";
import PasswordGenerator from "./PasswordGenerator";
import PercentageCalculator from "./PercentageCalculator";
import QRCodeTool from "./QRCodeTool";
import RegexGenerator from "./RegexGenerator";
import RemoveBackground from "./RemoveBackground";
import SslChecker from "./SslChecker";
import SvgConverter from "./SvgConverter";
import TextDiffChecker from "./TextDiffChecker";
import TextExtractor from "./TextExtractor";
import TimeCalculator from "./TimeCalculator";
import URLEncoder from "./URLEncoder";
import UnitConverter from "./UnitConverter";
import WebsiteCostCalculator from "./WebsiteCostCalculator";
import WordCounter from "./WordCounter";
import XMLFormatter from "./XMLFormatter";

export const toolRegistry: Record<string, React.ComponentType> = {
  "age-calculator": AgeCalculator,
  "base64-converter": Base64Converter,
  "csv-to-json": CSVtoJSON,
  "case-converter": CaseConverter,
  "color-picker": ColorPicker,
  "currency-converter": CurrencyConverter,
  "data-uri-generator": DataUriGenerator,
  "favicon-generator": FaviconGenerator,
  "file-converter": FileConverter,
  "file-rename-tool": FileRenameTool,
  "hash-generator": HashGenerator,
  "image-resizer": ImageResizer,
  "image-to-svg": ImageToSvg,
  "json-formatter": JSONFormatter,
  "jwt-debugger": JwtDebugger,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "markdown-previewer": MarkdownPreviewer,
  "mp4-to-gif": Mp4ToGif,
  "nutrition-master": NutritionMaster,
  "pdfImage-extractor": PDFImageExtractor,
  "password-generator": PasswordGenerator,
  "percentage-calculator": PercentageCalculator,
  "qr-code-tool": QRCodeTool,
  "regex-generator": RegexGenerator,
  "remove-background": RemoveBackground,
  "ssl-checker": SslChecker,
  "svg-converter": SvgConverter,
  "text-diff-checker": TextDiffChecker,
  "text-extractor": TextExtractor,
  "time-calculator": TimeCalculator,
  "url-encoder": URLEncoder,
  "unit-converter": UnitConverter,
  "website-cost-calculator": WebsiteCostCalculator,
  "word-counter": WordCounter,
  "xml-formatter": XMLFormatter,
};
