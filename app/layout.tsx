import type { Metadata } from "next";
import "../src/index.css";
import "../src/App.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "EaseMyTools",
  description: "EaseMyTools",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollToTop />
          <div className="App">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
