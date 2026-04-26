"use client";

import BackButton from "../../../src/components/BackButton";
import { toolRegistry } from "../../../src/components/tools/toolRegistry";

export default function ToolPageClient({ slug }: { slug: string }) {
  const ToolComponent = toolRegistry[slug];

  if (!ToolComponent) {
    return (
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <BackButton />
      </div>
    );
  }

  return <ToolComponent />;
}
