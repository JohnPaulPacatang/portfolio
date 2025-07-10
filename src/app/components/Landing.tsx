"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const Landing = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[90%] flex flex-col justify-between h-screen py-16 px-4 md:px-6 lg:px-8">
        <div className="flex-grow flex flex-col justify-center">
          <FadeIn delay={0}>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-black tracking-tight leading-[0.9]">
              Designing the
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-black tracking-tight leading-[0.9]">
              future, one pixel
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-black tracking-tight leading-[0.9]">
              at a time.
              <span className="inline-block ml-3 mt-3 border border-black rounded-full p-1">
                <ArrowUpRight size={85} className="text-black" />
              </span>
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-10">
          <FadeIn delay={0.8}>
            <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors">
              LET&apos;S CONNECT W/ ME
            </button>
          </FadeIn>

          <div className="text-sm font-medium uppercase text-black tracking-wider leading-snug md:text-right">
            <FadeIn delay={0.8}>
              <p>CRAFTING DIGITAL PRODUCT SUCH AS WEBSITE &</p>
              <p>MOBILE APP DESIGN, BRAND IDENTITY, UI/UX,</p>
              <p>INTERACTION DESIGN & WEBFLOW</p>
              <p>DEVELOPMENT.</p>
            </FadeIn>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
