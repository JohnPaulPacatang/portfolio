"use client";
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";
import FadeIn from "@/app/components/animations/FadeIn";

interface ProjectGridViewProps {
  projects: Project[];
  handleViewClick: (link: string) => void;
}

const ProjectGridView: React.FC<ProjectGridViewProps> = ({
  projects,
  handleViewClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: Project, index: number) => (
        <FadeIn key={index} delay={index * 0.05}>
          <div
            className="bg-neutral-100 p-4 lg:p-6 rounded-lg hover:shadow-xl transition relative group cursor-pointer block"
            onClick={() => handleViewClick(project.link)}
          >
            <div
              key={index}
              className="bg-neutral-100 lg:p-4 rounded-lg transition relative cursor-pointer"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="inline-block bg-white border border-neutral-300 text-neutral-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default ProjectGridView;