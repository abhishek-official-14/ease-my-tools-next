import ToolsPage from "../src/components/ToolsPage";
import HomePage from "../src/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EaseMyTools - Free Online Tools for Everyday Tasks",
  description:
    "Use EaseMyTools to access fast, free online utilities for image editing, text formatting, calculators, converters, and more.",
};

export default function Page() {
  return (
    <>
      <ToolsPage />
      <HomePage />
    </>
  );
}
