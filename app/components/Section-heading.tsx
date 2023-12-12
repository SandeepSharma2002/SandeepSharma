import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] w-fit mx-auto  font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}