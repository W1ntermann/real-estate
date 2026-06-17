import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "LUMIÈRE | Преміум нерухомість",
  description:
    "Ексклюзивна нерухомість у Києві та області. Купівля, продаж, оренда та інвестиційний консалтинг від LUMIÈRE.",
  metadataBase: new URL("https://lumiere.ua"),
  openGraph: {
    title: "LUMIÈRE | Преміум нерухомість",
    description:
      "Ексклюзивна нерухомість у Києві та області. Купівля, продаж, оренда та інвестиційний консалтинг.",
    images: ["/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
