"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After 10 years working as a Business Analyst, reaching the level of {" "}
        <span className="font-medium">1st Assistant Vice President</span>, I decided to pursue my
        passion for programming. I began working with an experienced .Net developer to plot a route in my journey as a self-taught {" "}
        <span className="font-medium">full-stack web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, ASP.NET, and SQL
        </span>
        . I am also familiar with TypeScript and NextJs. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending time with my family, creating and caring for bonsai, aquascaping and watching soccer. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">paleoanthropology and the formation of the Earth</span>.
      </p>
    </motion.section>
  );
}
