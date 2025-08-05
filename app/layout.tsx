import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1c1c22",
};

export const metadata: Metadata = {
  title: {
    default: "Tran Huy Tu - Software Engineer III | Full-Stack Developer",
    template: "%s | Tran Huy Tu",
  },
  description: "Software Engineer III specializing in enterprise solutions, TypeScript, React, Next.js, and cloud technologies. Based in Tokyo, Japan. View my portfolio and get in touch.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Kubernetes",
    "Spring Boot",
    "Laravel",
    "Tokyo",
    "Japan",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
    "DevOps",
  ],
  authors: [{ name: "Tran Huy Tu" }],
  creator: "Tran Huy Tu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edison-tran.com",
    siteName: "Tran Huy Tu Portfolio",
    title: "Tran Huy Tu - Software Engineer III",
    description: "Software Engineer III specializing in enterprise solutions and full-stack development",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Tran Huy Tu - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Huy Tu - Software Engineer III",
    description: "Software Engineer III specializing in enterprise solutions and full-stack development",
    images: ["/assets/photo.png"],
    creator: "@tranhtuytu",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://edison-tran.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tran Huy Tu",
    alternateName: "Tu Tran",
    jobTitle: "Software Engineer III",
    worksFor: {
      "@type": "Organization",
      name: "Money Forward, Inc.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "Japan",
      },
    },
    url: "https://edison-tran.com",
    email: "tranhuytu242000@gmail.com",
    telephone: "07089540203",
    sameAs: [
      "https://github.com/huytuchim789",
      "https://linkedin.com/in/tranhtuytu",
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Java",
      "Spring Boot",
      "Laravel",
      "AWS",
      "Kubernetes",
      "Docker",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Hanoi University of Science and Technology",
    },
    nationality: "Vietnamese",
    knowsLanguage: ["English", "Japanese", "Vietnamese"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/photo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
