"use client";
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";
import Link from "next/link";

interface GridViewProps {
  projects: Project[];
}

const ProjectsGridView: React.FC<GridViewProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-100 p-6 rounded-lg hover:shadow-xl transition relative group cursor-pointer block"
        >
          <div
            key={index}
            className="bg-neutral-100 p-6 rounded-lg hover:shadow-xl transition relative group cursor-pointer"
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
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-white border border-neutral-300 text-neutral-700 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGridView;
