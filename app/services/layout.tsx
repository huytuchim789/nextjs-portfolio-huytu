import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional software development services including Frontend Development with React/Next.js, Backend Development with Spring Boot/Laravel, Cloud & DevOps with AWS/Kubernetes, and Enterprise Solutions.",
  keywords: [
    "Frontend Development",
    "Backend Development",
    "Cloud Services",
    "DevOps",
    "Enterprise Solutions",
    "React Development",
    "Next.js Development",
    "Spring Boot",
    "Laravel",
    "AWS",
    "Kubernetes",
    "Microservices",
    "API Development",
    "Full Stack Development",
  ],
  openGraph: {
    title: "Services | Tran Huy Tu",
    description: "Professional software development services: Frontend, Backend, Cloud & DevOps, Enterprise Solutions",
    url: "https://edison-tran.com/services",
    siteName: "Tran Huy Tu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Services - Tran Huy Tu - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Tran Huy Tu",
    description: "Professional software development services: Frontend, Backend, Cloud & DevOps, Enterprise Solutions",
    images: ["/assets/photo.png"],
  },
  alternates: {
    canonical: "https://edison-tran.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}