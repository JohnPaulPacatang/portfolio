import React from "react";
import PrimaryButton from "./ui/PrimaryButton";
import FadeIn from "@/app/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[90%] px-4 md:px-6 lg:px-8">
        <div className="mb-24">
          <div className="overflow-hidden">
            <FadeIn>
              <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-right font-black leading-none tracking-tighter text-neutral-900 select-none uppercase">
                About Me
              </h1>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] tracking-tight">
                  Creating meaningful
                  <br />
                  <span className="font-black italic">digital experiences</span>
                  <br />
                  through design & code
                </h2>
              </FadeIn>

              <div className="w-24 h-px bg-neutral-900"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <FadeIn>
                  <p className="text-xl font-light leading-relaxed text-neutral-700">
                    I believe in the power of simplicity. Every pixel has
                    purpose, every interaction tells a story.
                  </p>
                </FadeIn>

                <div className="space-y-2 text-sm font-mono tracking-widest uppercase text-neutral-500">
                  <FadeIn>
                    <div>01 — Design</div>
                    <div>02 — Development</div>
                    <div>03 — Strategy</div>
                  </FadeIn>
                </div>

                <FadeIn>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 border-2 border-black rounded-full text-sm font-medium transition hover:bg-black hover:text-white"
                  >
                    View CV <ArrowRight className="w-4 h-4" />
                  </a>
                </FadeIn>
              </div>

              <div className="space-y-8">
                <FadeIn>
                  <p className="text-lg font-light leading-relaxed text-neutral-600">
                    Every project pushes boundaries while staying true to its
                    essence. Clean code, thoughtful interactions, and purposeful
                    design drive everything I create.
                  </p>
                </FadeIn>

                <FadeIn>
                  <PrimaryButton>More about me</PrimaryButton>
                </FadeIn>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <FadeIn>
                <div className="w-80 h-[28rem] md:w-96 md:h-[32rem] border border-neutral-200 flex items-center justify-center relative overflow-hidden">
                  <span className="text-neutral-400 text-sm font-mono tracking-widest">
                    [PHOTO]
                  </span>

                  <div className="absolute top-4 right-4 w-8 h-8 border border-neutral-300"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-px bg-neutral-300"></div>
                </div>

                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
                  <span className="text-xs font-mono tracking-[0.3em] text-neutral-400 whitespace-nowrap">
                    DESIGNER × DEVELOPER
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="mt-32 flex justify-between items-end">
          <div className="space-y-2">
            <div className="w-16 h-px bg-neutral-900"></div>
            <div className="w-8 h-px bg-neutral-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
