import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Tran Huy Tu - Software Engineer III at Money Forward, Inc. Tokyo. 2+ years experience in enterprise solutions, full-stack development with TypeScript, React, Next.js, Spring Boot, AWS, and Kubernetes. Education: Computer Science from Hanoi University of Science and Technology.",
  keywords: [
    "Resume",
    "CV",
    "Software Engineer Resume",
    "Money Forward",
    "Tokyo Software Engineer",
    "TypeScript Developer",
    "React Developer",
    "Full Stack Resume",
    "Enterprise Developer",
    "AWS Engineer",
    "Kubernetes Engineer",
    "Spring Boot Developer",
    "Laravel Developer",
    "HUST Alumni",
    "Japanese N3",
  ],
  openGraph: {
    title: "Resume | Tran Huy Tu",
    description: "Software Engineer III at Money Forward, Inc. - 2+ years experience in enterprise solutions and full-stack development",
    url: "https://edison-tran.com/resume",
    siteName: "Tran Huy Tu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Resume - Tran Huy Tu - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Tran Huy Tu",
    description: "Software Engineer III at Money Forward, Inc. - 2+ years experience in enterprise solutions and full-stack development",
    images: ["/assets/photo.png"],
  },
  alternates: {
    canonical: "https://edison-tran.com/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}