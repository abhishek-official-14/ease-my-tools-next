import ToolPageClient from "./ToolPageClient";
import type { Metadata } from "next";
import { getAllTools } from "../../../src/data/toolsData";

type ToolPageProps = { params: { slug: string } };

const getToolBySlug = (slug: string) => {
  return getAllTools().find((tool) => tool.link === `/tools/${slug}`);
};

export function generateMetadata({ params }: ToolPageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  const toolName = tool?.name ?? "Tool";

  return {
    title: `${toolName} - EaseMyTools`,
    description: `Use the ${toolName} on EaseMyTools to complete your task quickly with this free online utility.`,
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  return <ToolPageClient slug={params.slug} />;
}
