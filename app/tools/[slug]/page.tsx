import { notFound } from "next/navigation";
import ToolRenderer from "../../../src/components/tools/ToolRenderer";
import CategoryToolsPage from "../../../src/components/CategoryToolsPage";
import { getAllTools, toolsByCategory } from "../../../src/data/toolsData";

export default async function ToolOrCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (Object.keys(toolsByCategory).includes(slug)) {
    return <CategoryToolsPage categoryId={slug} />;
  }

  const exists = getAllTools().some((tool) => tool.link === `/tools/${slug}`);
  if (!exists) {
    notFound();
  }

  return <ToolRenderer slug={slug} />;
}
