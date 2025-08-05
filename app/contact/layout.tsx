import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tran Huy Tu - Software Engineer III based in Tokyo, Japan. Available for freelance projects, technical consulting, and collaboration opportunities. Email: tranhuytu242000@gmail.com",
  keywords: [
    "Contact",
    "Hire Software Engineer",
    "Freelance Developer",
    "Technical Consultant",
    "Tokyo Developer",
    "Japan Software Engineer",
    "Contact Developer",
    "Hire Full Stack Developer",
    "Software Development Services",
    "Collaboration",
  ],
  openGraph: {
    title: "Contact | Tran Huy Tu",
    description: "Get in touch for software development projects, technical consulting, and collaboration opportunities",
    url: "https://edison-tran.com/contact",
    siteName: "Tran Huy Tu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Contact Tran Huy Tu - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Tran Huy Tu",
    description: "Get in touch for software development projects, technical consulting, and collaboration opportunities",
    images: ["/assets/photo.png"],
  },
  alternates: {
    canonical: "https://edison-tran.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}