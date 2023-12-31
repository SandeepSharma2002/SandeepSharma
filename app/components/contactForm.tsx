"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";
import {sendEmail} from "@/actions/sendEmail"
import SubmitBtn from "./Submit-btn";
import { usePending } from "@/context/pending";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const {Pending,setPending} = usePending();
  
    const [formData, setFormData] = useState({
      senderEmail: '',
      message: '',
    });
  
    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(()=>
    {
      if(!Pending && formData.senderEmail !== '')
      {
        setFormData({senderEmail:"", message:""});
        toast.success("Thanks For Contacting!")
      }
    },[Pending])
  

  return (
    <>
      <ToastContainer/>
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
          action={sendEmail}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email"
            id="senderEmail"
            name="senderEmail"
            required
            maxLength={500}
            value={formData.senderEmail}
            onChange={handleChange}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={5000}
          />
          <SubmitBtn/>
        </form>
      </motion.section>
    </>
  );
}
