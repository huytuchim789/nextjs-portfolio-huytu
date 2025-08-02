"use client";

import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 234 567 890",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "luke.coleman",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "luke@example.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Spanish",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "", // URL or icon class
  title: "Work Experience",
  description: "A summary of my professional journey.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      duration: "Jan 2021 - Present",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
    {
      company: "Creative Devs",
      position: "UI/UX Designer",
      duration: "Jun 2018 - Dec 2020",
    },
  ],
};

const education = {
  icon: "", // optional: icon class or path
  title: "Education",
  description: "My academic background and qualifications.",
  items: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
    },
    {
      institution: "Coursera / Udemy",
      degree: "Certificates in Web Development",
      duration: "2019 - Present",
    },
  ],
};

const skills = {
  icon: "", // optional: icon class or path
  title: "Skills",
  description: "Technologies and tools I use regularly.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-baseline gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
