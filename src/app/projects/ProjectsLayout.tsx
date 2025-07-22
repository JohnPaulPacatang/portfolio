"use client";
import React, { useState } from "react";
import { LayoutPanelTop, List } from "lucide-react";
import ProjectsData from "./ProjectsData";
import ProjectListView from "./ProjectsListView";
import ProjectGridView from "./ProjectsGridView";
import FadeIn from "@/app/components/animations/FadeIn";

const ProjectsLayout: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

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
            <div className="flex justify-between items-center mb-8">
              <FadeIn>
                <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-left font-black leading-none tracking-tighter text-neutral-900 select-none uppercase">
                  Projects
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      viewMode === 'list'
                        ? "bg-neutral-800 text-white scale-105"
                        : "bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300"
                    }`}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      viewMode === 'grid'
                        ? "bg-neutral-800 text-white scale-105"
                        : "bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300"
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutPanelTop size={20} />
                  </button>
                </div>
              </FadeIn>
            </div>

            {viewMode === 'list' ? (
              <ProjectListView
                projects={projects}
                hoveredProject={hoveredProject}
                displayPosition={displayPosition}
                handleMouseMove={handleMouseMove}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleViewClick={handleViewClick}
              />
            ) : (
              <ProjectGridView
                projects={projects}
                handleViewClick={handleViewClick}
              />
            )}
          </div>
        </div>
      )}
    </ProjectsData>
  );
};

export default ProjectsLayout;