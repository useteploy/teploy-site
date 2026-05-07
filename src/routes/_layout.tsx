import "../styles/global.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const config = { mode: "static" };

export function head() {
  return {
    titleTemplate: "%s - Teploy",
    description: "Deploy anything. Pay almost nothing.",
    htmlAttrs: { lang: "en", "data-theme": "dark" },
    headScripts: [
      {
        content: `(function(){var s=localStorage.getItem("theme");if(s){document.documentElement.setAttribute("data-theme",s)}else if(window.matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.setAttribute("data-theme","light")}})();`,
        id: "theme-init",
      },
      {
        content: `
          (function() {
            var pc1 = document.createElement('link'); pc1.rel = 'preconnect'; pc1.href = 'https://fonts.googleapis.com'; document.head.appendChild(pc1);
            var pc2 = document.createElement('link'); pc2.rel = 'preconnect'; pc2.href = 'https://fonts.gstatic.com'; pc2.crossOrigin = ''; document.head.appendChild(pc2);
            var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'; document.head.appendChild(fl);
            var ic = document.createElement('link'); ic.rel = 'icon'; ic.type = 'image/svg+xml'; ic.href = '/favicon.svg'; document.head.appendChild(ic);
          })();
        `,
      },
    ],
    openGraph: {
      type: "website",
      image: "/og-image.png",
    },
    twitter: {
      card: "summary_large_image" as const,
      image: "/og-image.png",
    },
  } as any;
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <Nav />
      <main class="pt-14">{children}</main>
      <Footer />
    </>
  );
}
