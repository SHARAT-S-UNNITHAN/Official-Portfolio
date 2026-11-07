import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { CommandMenu } from "@/components/CommandMenu";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  metadataBase: new URL("https://sharatsunnithan.vercel.app"),
  title: {
    default: `${personalData.name} — ${personalData.roleTitle}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.shortBio,
  keywords: [
    "Sharat S Unnithan",
    "Software Developer Kerala",
    "Python Developer India",
    "Django Developer",
    "Independent Freelancer Kerala",
    "BCA Graduate University of Kerala",
    "MCA Student IGNOU",
    "Web Application Developer",
    "Kayamkulam Software Developer",
    "Freelance Digital Solutions",
  ],
  authors: [{ name: personalData.name, url: personalData.githubUrl }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sharatsunnithan.vercel.app",
    title: `${personalData.name} — Official Personal Portfolio & Freelance Services`,
    description: personalData.shortBio,
    siteName: personalData.name,
    images: [
      {
        url: "/images/projects/expense-tracker.svg",
        width: 1200,
        height: 630,
        alt: `${personalData.name} Portfolio Banner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} — Software Developer`,
    description: personalData.shortBio,
    images: ["/images/projects/expense-tracker.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark font-sans" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <CommandMenu />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
