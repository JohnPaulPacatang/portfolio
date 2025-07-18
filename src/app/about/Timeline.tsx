import React from "react";
import FadeIn from "@/app/components/animations/FadeIn";

const Timeline = () => {
  const educationData = [
    {
      year: "2022-2025",
      title: "Bachelor of Science in Computer Science",
      school: "St.Clare College of Caloocan",
    },
    {
      year: "2019-2020",
      title: "Bachelor of Science in Information Technology",
      school: "AMA Computer University",
    },
    {
      year: "2017-2019",
      title: "Information and Communications Technology",
      school: "Access Computer College",
    },
  ];

  return (
    <div className="w-full py-4">
      <FadeIn>
        <h1 className="text-4xl font-bold text-black mb-6">Education</h1>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-neutral-600"></div>

        {educationData.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="relative flex items-start mb-10 last:mb-0 group">
              <div className="absolute left-1 w-2 h-2 bg-black rounded-full z-10 group-hover:scale-110 transition-transform duration-200"></div>

              <div className="ml-8 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-black border border-gray-300 px-3 py-1 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-black leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-lg -mt-1">
                  {item.school}
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
