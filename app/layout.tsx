import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Providers from "./providers";

const themeInitScript = `(() => {
  try {
    const defaultTheme = "light";
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : defaultTheme;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (_) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Providers>
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
