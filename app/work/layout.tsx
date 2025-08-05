import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my portfolio of software engineering projects including MentionAI - an AI platform for digital clones, Mikatano Cash Management - enterprise FinTech solution, and other full-stack applications built with modern technologies.",
  keywords: [
    "Portfolio",
    "Software Projects",
    "MentionAI",
    "Mikatano Cash Management",
    "Enterprise Projects",
    "FinTech",
    "AI Platform",
    "Machine Learning Projects",
    "Full Stack Projects",
    "TypeScript Projects",
    "React Projects",
    "Next.js Projects",
    "AWS Projects",
    "Kubernetes Projects",
  ],
  openGraph: {
    title: "Portfolio | Tran Huy Tu",
    description: "Explore my software engineering projects including AI platforms, enterprise FinTech solutions, and full-stack applications",
    url: "https://edison-tran.com/work",
    siteName: "Tran Huy Tu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Tran Huy Tu - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Tran Huy Tu",
    description: "Explore my software engineering projects including AI platforms, enterprise FinTech solutions, and full-stack applications",
    images: ["/assets/photo.png"],
  },
  alternates: {
    canonical: "https://edison-tran.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}