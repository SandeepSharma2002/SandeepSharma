import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/Portfolio.png";
import project2 from "@/public/Manage-wise.png";
import project3 from "@/public/Study-nation.png";
import project4 from "@/public/Dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2020-2024",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  {
    title: "ReactJS Developer",
    company: "Centernet Private Limited",
    location: "Remote",
    description:
      "I'm now a ReactJs Developer working at Centernet Pvt Ltd. My stack includes React, Next.js, TypeScript and Tailwind.",
    icon: React.createElement(FaReact),
    date: "Nov 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "This is my website, which delves into a collection of my latest projects, showing the passion and dedication.",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind", "EmailJs"],
    imageUrl: project1,
    liveLinks:"https://sandeep-sharma.vercel.app/",
    gitLinks:"https://github.com/SandeepSharma2002/SandeepSharma"
  },
  {
    title: "Manage-Wise",
    description:
      "Designed and developed a modern and visually appealing web application.",
    tags: ["React", "Framer Motion","Tailwind", "React Caurosel"],
    imageUrl: project2,
    liveLinks:"https://mng-wise.netlify.app/",
    gitLinks:"https://github.com/SandeepSharma2002/ManageWise"
  },
  {
    title: "StudyNation",
    description:
      "Built Frontend of Educational Plateform for Students and Instructors with authenticaton and authorisation functionalities.",
    tags: ["React","JQuery","Tailwind"],
    imageUrl: project3,
    liveLinks:"https://sandeepsharma2002.github.io/StudyNation/",
    gitLinks:"https://github.com/SandeepSharma2002/StudyNation"
  },
  {
    title: "Admin-Dashboard",
    description:
      "Engineered an efficient admin dashboard seamlessly integrating CRUD functionalities.",
    tags: ["React","typescript","Tailwind","JQuery", "React Material Table"],
    imageUrl: project4,
    liveLinks:"https://sandeepsharma2002.github.io/table-assignment/",
    gitLinks:"https://github.com/SandeepSharma2002/table-assignment"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Java SE",
  "Java EE",
  "Framer Motion",
] as const;