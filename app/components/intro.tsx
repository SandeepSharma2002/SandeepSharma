"use client";
import { motion, spring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/acticeSection";
import Sandeep from "@/public/Sandeep.jpg"
import { SiLeetcode } from "react-icons/si";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const bounceVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 10 },
        opacity: { duration: 0.5 },
      },
    },
  };
  return (
    <section
      className="flex flex-col max-w-4xl text-center mb-28 sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
      id="home"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={bounceVariants}
          >
            <Image
              src={Sandeep}
              alt="Sandeep Sharma"
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl text-white font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello 👋, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9]">
            Sandeep Sharma.
          </span>
        </span>{" "}
        I'm a <span className="font-bold">full-stack developer. </span>
        {/* with{" "}<span className="font-bold">8 years</span> of experience.  */}
        I enjoy building <span className="italic">user-friendly web applications.</span> My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            href="#contact"
            className="group bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/Sandeep_Sharma_Resume.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-2 w-[375px]">
          <a
            className="bg-white p-4 text-2xl text-[#0077b5] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/sandeep-sharma-9a8861229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
          <Image src="https://th.bing.com/th/id/OIP.d5futl9_HMoiD0hPTuYylwHaHX?rs=1&pid=ImgDetMain" width={32} height={32} alt="" />
          </a>

          <a
            className="bg-white text-2xl text-black flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/SandeepSharma2002"
            target="_blank"
          >
            <Image src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" width={40} height={32} style={{margin:"0px 8px", width:"auto", height:"auto"}}  alt="" />
          </a>
          <a
            className="bg-white p-4 text-2xl text-black flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://leetcode.com/sandeepsharma100/"
            target="_blank"
          >
            <Image src="https://nil1729.github.io/LEETCODE-001/images/logo.png" width={32} height={32} alt="" />
          </a>
          <a
            className="bg-white p-4 text-2xl text-black flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://auth.geeksforgeeks.org/user/indialover2002"
            target="_blank"
          >
            <Image src="https://media.geeksforgeeks.org/img-practice/gfg_200X200.png" width={32} height={32}  alt="" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
