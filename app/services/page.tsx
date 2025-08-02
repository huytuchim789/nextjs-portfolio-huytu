"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications using React, Next.js, TypeScript, and state-of-the-art UI frameworks.",
    href: "/",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Creating robust APIs and server-side solutions with Spring Boot, Laravel, Node.js, and microservices architecture.",
    href: "/",
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS, implementing CI/CD pipelines, and orchestrating with Kubernetes.",
    href: "/",
  },
  {
    num: "04",
    title: "Enterprise Solutions",
    description:
      "Developing scalable enterprise applications with focus on performance, security, and maintainability.",
    href: "/",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
