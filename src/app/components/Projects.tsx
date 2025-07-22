"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/app/components/animations/FadeIn";
import Magnet from "@/app/components/ui/Magnet";
import Link from "next/link";
import PrimaryButton from "@/app/components/ui/PrimaryButton";

interface Project {
  title: string;
  techStack: string[];
  link: string;
  image: string;
  description: string;
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
      title: "PESO User",
      techStack: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "EmailJS"],
      link: "https://peso-user.vercel.app/",
      image: "/assets/peso-user.png",
      description:
        "An online job portal developed as part of our thesis to assist PESO North Caloocan in connecting jobseekers with local employers more efficiently.",
    },
    {
      title: "PESO Admin",
      techStack: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "EmailJS"],
      link: "https://peso-admin.vercel.app/",
      image: "/assets/peso-admin.png",
      description:
        "An admin dashboard developed as part of our thesis to help PESO North Caloocan manage job postings, employer accounts, and applicant data with ease and efficiency.",
    },
    {
      title: "JDM Classics",
      techStack: ["Next.js", "React", "Tailwind CSS", "Headless UI"],
      link: "https://jdm-classics.vercel.app/",
      image: "/assets/jdm.png",
      description:
        "A school project created as our first website using React. Showcases iconic JDM cars, highlighting classic models, specs, and their legacy.",
    },
    {
      title: "Portfolio",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://johnpaulpacatang.github.io/my-portfolio-v2/",
      image: "/assets/oldportfolio.png",
      description:
        "My first personal portfolio showcasing web projects, skills, and experience as an aspiring front-end developer.",
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
          <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] py-10 text-left font-black leading-none tracking-tighter text-neutral-900 select-none uppercase">
            Projects
          </h1>
        </FadeIn>

        <div className="my-8">
          {projects.map((project: Project, index: number) => (
            <FadeIn key={index} delay={index * 0.01}>
              <div
                key={index}
                className="border-t border-neutral-400 w-full py-16 relative cursor-pointer transition-all duration-500  group"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="md:mx-4 xl:mx-28 flex justify-between items-center flex-col md:flex-row gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-xl md:text-[2rem] lg:text-[3rem] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-black transition-all duration-500 group-hover:tracking-wider group-hover:scale-105 group-hover:opacity-90">
                      {project.title}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-right space-y-4 transition-all duration-500 group-hover:scale-105 group-hover:translate-x-2">
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

                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
                      {project.description}
                    </p>
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
                          onClick={() => handleViewClick(project.link)}
                        >
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
        <FadeIn>
          <Link className="flex justify-center " href="/projects">
            <PrimaryButton className="cursor-pointer">View more</PrimaryButton>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default Projects;
