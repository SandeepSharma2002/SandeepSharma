"use client";
import React, { useRef, useState } from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const form = useRef<any>();

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const serviceId:any = process.env.NEXT_PUBLIC_SID; 
    const templateId:any = process.env.NEXT_PUBLIC_TID; 
    const publicKey:any = process.env.NEXT_PUBLIC_PK; 

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        "S4CQDI26yJxGHI3FF"
      )
      .then(
        (result) => {
          setFormData({ message: "", email: "" });
          console.log(result.text);
          toast.success("Thanks For Contacting!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error in Contacting!");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-300 -mt-6 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:Sandeepsharmajec24@gmail.com">
            Sandeepsharmajec24@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
          ref={form}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          >
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </button>
        </form>
      </motion.section>
    </>
  );
}
