import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professeur Sakho grand voyant",
  description:
    "Bienvenue sur mon site de voyance et de rituels de retour affectif !Découvrez mes services pour trouver des réponses et attirer l’amourvéritable. Explorez dès maintenant et laissez la magie opérer dans votre vie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
