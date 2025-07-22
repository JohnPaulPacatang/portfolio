"use client";
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";
import FadeIn from "@/app/components/animations/FadeIn";
import Magnet from "@/app/components/ui/Magnet";

interface ProjectListViewProps {
  projects: Project[];
  hoveredProject: number | null;
  displayPosition: { x: number; y: number };
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>,index: number) => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  handleViewClick: (link: string) => void;
}

const ProjectListView: React.FC<ProjectListViewProps> = ({
  projects,
  hoveredProject,
  displayPosition,
  handleMouseMove,
  handleMouseEnter,
  handleMouseLeave,
  handleViewClick,
}) => {
  return (
    <div className="my-8">
      {projects.map((project: Project, index: number) => (
        <FadeIn key={index} delay={index * 0.01}>
          <div
            key={index}
            className="border-t border-neutral-400 w-full py-12 relative cursor-pointer transition-all duration-500 hover:bg-neutral-50 group"
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
  );
};

export default ProjectListView;