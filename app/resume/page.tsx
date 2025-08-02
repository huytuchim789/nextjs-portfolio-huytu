"use client";

import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

import {
  FaReact,
  FaPython,
  FaAws,
  FaDocker,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiKotlin,
  SiSpringboot,
  SiLaravel,
  SiKubernetes,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "Software Engineer III with expertise in enterprise solutions, cloud technologies, and full-stack development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tran Huy Tu",
    },
    {
      fieldName: "Phone",
      fieldValue: "07089540203",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "GitHub",
      fieldValue: "huytuchim789",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "tranhuytu242000@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English (B2), Japanese (N3)",
    },
    {
      fieldName: "Current Role",
      fieldValue: "Software Engineer III",
    },
  ],
};

const experience = {
  icon: "", // URL or icon class
  title: "Work Experience",
  description:
    "My professional journey in software engineering and enterprise solutions.",
  items: [
    {
      company: "Money Forward, Inc. (Tokyo, Japan)",
      position: "Software Engineer III",
      duration: "Dec 2023 - Present",
    },
    {
      company: "Money Forward Vietnam",
      position: "Git Visualization - Frontend Developer",
      duration: "Jan 2023",
    },
    {
      company: "Money Forward Vietnam",
      position: "Project Cost - Frontend Developer",
      duration: "Jul 2022",
    },
    {
      company: "Money Forward Vietnam",
      position: "Send Cloud Invoice - Backend Developer",
      duration: "Jul 2022",
    },
  ],
};

const education = {
  icon: "", // optional: icon class or path
  title: "Education",
  description: "My academic background and certifications.",
  items: [
    {
      institution: "Hanoi University of Science and Technology",
      degree: "Computer Science (CPA: 2.99)",
      duration: "Sep 2018 - Nov 2023",
    },
    {
      institution: "JLPT Certification",
      degree: "Japanese Language Proficiency N3",
      duration: "Certified",
    },
  ],
};

const skills = {
  icon: "", // optional: icon class or path
  title: "Skills",
  description:
    "Technologies and tools I use for building enterprise solutions.",
  skillList: [
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-baseline gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-center gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
