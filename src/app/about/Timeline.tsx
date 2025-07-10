import React from "react";
import FadeIn from "@/app/components/animations/FadeIn";

const Timeline = () => {
  const educationData = [
    {
      year: "2018",
      title: "High School Diploma",
      description: "Graduated with honors, focused on STEM subjects",
    },
    {
      year: "2022",
      title: "Bachelor of Science",
      description: "Computer Science major with Mathematics minor",
    },
    {
      year: "2023",
      title: "Full Stack Certification",
      description: "Specialized in React, Node.js, and database management",
    },
    {
      year: "2024",
      title: "Master of Science",
      description: "Currently pursuing Software Engineering degree",
    },
  ];

  return (
    <div className="w-full p-4">
      <FadeIn>
        <h1 className="text-4xl font-bold text-black mb-6">Education</h1>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-neutral-600"></div>

        {educationData.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="relative flex items-start mb-10 last:mb-0 group">
              <div className="absolute left-1 w-2 h-2 bg-black rounded-full z-10 group-hover:scale-110 transition-transform duration-200"></div>

              <div className="ml-8 space-y-3 ">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-black border border-gray-300 px-3 py-1 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-black leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
