"use client";

import { ThemeProvider } from "../src/contexts/ThemeContext";
import ScrollToTop from "../src/components/ScrollToTop";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ScrollToTop />
      {children}
    </ThemeProvider>
  );
}
