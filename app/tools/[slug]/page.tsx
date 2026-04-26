import ToolPageClient from "./ToolPageClient";

export default function ToolPage({ params }: { params: { slug: string } }) {
  return <ToolPageClient slug={params.slug} />;
}
