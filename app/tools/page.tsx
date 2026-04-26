import ToolsPage from "../../src/components/ToolsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools - EaseMyTools",
  description:
    "Browse all free EaseMyTools utilities including converters, calculators, text tools, image tools, and web tools in one place.",
};

export default function Tools() {
  return <ToolsPage />;
}
