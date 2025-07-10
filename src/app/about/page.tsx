import React from "react";
import Profile from "./Profile";
import Timeline from "./Timeline";
import TechStack from "./Techstack";
import Certificates from "./Certificates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my journey, skills, and achievements.",
};

export default function About() {
  return (
    <div className="min-h-screen pt-28 px-4 md:px-6 lg:px-8">
      <div className="max-w-[90%] mx-auto">
        <Profile />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10 max-w-[90%] mx-auto">
        <div className="w-full lg:w-1/2">
          <Timeline />
        </div>
        <div className="w-full lg:w-1/2">
          <TechStack />
        </div>
      </div>

      <Certificates />
    </div>
  );
}
