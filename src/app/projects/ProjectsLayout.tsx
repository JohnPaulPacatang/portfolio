"use client";
import React, { useState } from "react";
import ProjectsData from "./ProjectsData";
import ProjectsListView from "./ProjectsListView";
import ProjectsGridView from "./ProjectsGridView";
import FadeIn from "@/app/components/animations/FadeIn";
import { LayoutPanelTop, List } from "lucide-react";

const ProjectsLayout: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <ProjectsData>
      {({
        projects,
        hoveredProject,
        displayPosition,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        handleViewClick,
      }) => (
        <div className="flex items-center justify-center my-8">
          <div className="w-full max-w-[90%] px-4 md:px-6 lg:px-8">
            <FadeIn>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-left font-black leading-none tracking-tighter text-neutral-900 select-none uppercase">
                  Projects
                </h1>
                <div className="flex gap-3">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-xl transition-all duration-300 
                    ${
                      viewMode === "list"
                        ? "bg-neutral-800 text-white scale-105"
                        : "bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300"
                    }`}
                    title="List View"
                  >
                    <List size={24} />
                  </button>

                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-xl transition-all duration-300
                    ${
                      viewMode === "grid"
                        ? "bg-neutral-800 text-white scale-105"
                        : "bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300"
                    }`}
                    title="Grid View"
                  >
                    <LayoutPanelTop size={24} />
                  </button>
                </div>
              </div>
            </FadeIn>

            <div className="my-8">
              {viewMode === "list" ? (
                <ProjectsListView
                  projects={projects}
                  hoveredProject={hoveredProject}
                  displayPosition={displayPosition}
                  handleMouseMove={handleMouseMove}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleViewClick={handleViewClick}
                />
              ) : (
                <ProjectsGridView projects={projects} />
              )}
            </div>
          </div>
        </div>
      )}
    </ProjectsData>
  );
};

export default ProjectsLayout;
