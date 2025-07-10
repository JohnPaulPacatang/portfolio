"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/app/components/animations/FadeIn";
import Magnet from "@/app/components/ui/Magnet";

interface Project {
  title: string;
  techStack: string[];
  link: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [displayPosition, setDisplayPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const animationFrameRef = useRef<number | null>(null);

  const projects: Project[] = [
    {
      title: "Peso Admin",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      link: "https://example.com/project1",
      image: "/assets/peso-admin.png",
    },
    {
      title: "Project 2",
      techStack: ["Next.js", "TypeScript", "MongoDB"],
      link: "https://example.com/project2",
      image: "/assets/peso-user.png",
    },
    {
      title: "Project 3",
      techStack: ["Vue.js", "Vuetify", "Firebase"],
      link: "https://example.com/project3",
      image: "/assets/peso-admin.png",
    },
    {
      title: "Project 4",
      techStack: ["Angular", "SCSS", "Node.js"],
      link: "https://example.com/project4",
      image: "/assets/peso-user.png",
    },
  ];

  useEffect(() => {
    const animate = () => {
      setDisplayPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        const ease = 0.1;

        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (hoveredProject !== null) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, hoveredProject]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (hoveredProject === index) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseEnter = (index: number): void => {
    setHoveredProject(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredProject(null);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleViewClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-full max-w-[90%] px-4 md:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-left font-black leading-none tracking-tighter text-neutral-900 select-none uppercase">
            Projects
          </h1>
        </FadeIn>

        <div className="my-8">
          {projects.map((project: Project, index: number) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                key={index}
                className="border-t border-neutral-400 w-full py-16 relative cursor-pointer transition-all duration-500  group"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold transition-all duration-500 group-hover:text-neutral-600 group-hover:scale-105 group-hover:tracking-wider ">
                      {project.title}
                    </div>
                  </div>

                  <div className="text-center md:text-right text-lg md:text-base transform transition-all duration-500 group-hover:scale-105 group-hover:translate-x-2">
                    <div className="transition-all duration-500">
                      <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                        {project.techStack.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700 border border-neutral-300 hover:bg-neutral-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {hoveredProject === index && (
                  <div
                    className="fixed pointer-events-none z-[9999] transition-opacity duration-200 opacity-100"
                    style={{
                      left: displayPosition.x - 225,
                      top: displayPosition.y - 175,
                      transform: "translate(0, 0)",
                    }}
                  >
                    <div
                      className="bg-black/80 overflow-hidden"
                      style={{ width: "450px", height: "350px" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="relative"
                          style={{ width: "400px", height: "300px" }}
                        >
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            className="object-contain rounded-lg"
                            sizes="400px"
                            priority={hoveredProject === index}
                            quality={100}
                            unoptimized={true}
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <Magnet
                          padding={50}
                          disabled={false}
                          magnetStrength={1}
                          onClick={() => handleViewClick(project.link)}>
                          View
                        </Magnet>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
