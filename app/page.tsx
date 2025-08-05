import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Tran Huy Tu's portfolio. Software Engineer III specializing in TypeScript, React, Next.js, and cloud technologies. Based in Tokyo, Japan.",
  openGraph: {
    title: "Tran Huy Tu - Software Engineer III | Portfolio",
    description: "Welcome to my portfolio. I excel at building scalable enterprise solutions with TypeScript, React, Next.js, and cloud technologies.",
    url: "https://edison-tran.com",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Tran Huy Tu - Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://edison-tran.com",
  },
};

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl" role="heading" aria-level={2}>Software Engineer</span>
            <h1 className="h1">
              Hello I&apos;m
              <br /> <span className="text-accent">Tran Huy Tu</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80" itemProp="description">
              I excel at building scalable enterprise solutions and am
              proficient in TypeScript, React, Next.js, and cloud technologies
              like AWS and Kubernetes
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a 
                href="/assets/Resume_Tran_Huy_Tu_Frontend_Engineer.pdf" 
                download="Resume_Tran_Huy_Tu_Frontend_Engineer.pdf"
                aria-label="Download Tran Huy Tu's CV"
                title="Download Resume - Tran Huy Tu Software Engineer"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:border-none mb:8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
