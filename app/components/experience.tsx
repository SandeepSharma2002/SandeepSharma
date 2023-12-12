"use client";
import React from "react";
import SectionHeading from "./Section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="white">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: "#1e293b",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="text-white"
              icon={item.icon}
              iconStyle={{
                background:"white",
                fontSize: "2rem",
              }}
            >
              <h3 className="font-semibold capitalize text-white">{item.title}</h3>
              <div className="flex justify-between">
                <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] w-fit">{item.company}</h4>
              <p className="font-normal !mt-auto text-gray-300">{item.location}</p>
              </div>
              <p className="!mt-1 !font-normal text-gray-300 dark:text-white/90">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}