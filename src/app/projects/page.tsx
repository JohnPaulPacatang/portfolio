import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects showcasing my skills in web development, design, and more.",
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-28">
      <ProjectsLayout></ProjectsLayout>
    </div>
  );
};

export default Projects;
