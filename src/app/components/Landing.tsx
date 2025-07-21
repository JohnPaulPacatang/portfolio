"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";

const Landing = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[90%] flex flex-col justify-between h-screen py-10 px-4 md:px-6 lg:px-8">
        <div className="flex-grow flex flex-col justify-center text-black">
          <FadeIn delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] 2xl:text-[10rem] font-black tracking-tight leading-[0.9] flex items-center md:gap-4 flex-wrap">
              PR
              <span className="inline-block w-24 md:w-40 lg:w-56 h-10 md:h-16 lg:h-20 xl:h-28 border-8 border-black rounded-full" />
              GRESS,
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] 2xl:text-[10rem] font-black tracking-tight leading-[0.9] flex items-center gap-4 flex-wrap">
              ONE PURPOSEFUL
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] 2xl:text-[10rem] font-black tracking-tight leading-[0.9] flex items-center md:gap- flex-wrap">
              STEP AT A TIME
              <span className="hidden md:ml-3 border border-black rounded-full p-2 md:block">
                <ArrowUpRight className="text-black w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 2xl:w-24 2xl:h-24" />
              </span>
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-10 text-center md:text-right">
          <FadeIn delay={0.8}>
            <button className="px-5 py-2 text-sm md:px-8 md:py-3 md:text-base border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors">
              LET&apos;S BUILD SOMETHING TOGETHER
            </button>
          </FadeIn>

          <div className="text-xs lg:text-sm font-medium uppercase text-black tracking-wider leading-snug">
            <FadeIn delay={0.8}>
              <p>I design and build thoughtful, useful websites.</p>
              <p>Clean layouts, smooth interactions, and sharp details.</p>
              <p>Making the web better, one project at a time.</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
