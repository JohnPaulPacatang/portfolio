"use client";
import React, { useState, useRef, useEffect } from "react";

export interface Project {
  title: string;
  techStack: string[];
  link: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

interface ProjectsDataProps {
  children: (props: {
    projects: Project[];
    hoveredProject: number | null;
    displayPosition: MousePosition;
    handleMouseMove: (
      e: React.MouseEvent<HTMLDivElement>,
      index: number
    ) => void;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
    handleViewClick: (link: string) => void;
  }) => React.ReactNode;
}

const ProjectsData: React.FC<ProjectsDataProps> = ({ children }) => {
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
    window.open(link, '_blank');
  };

  return (
    <>
      {children({
        projects,
        hoveredProject,
        displayPosition,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        handleViewClick,
      })}
    </>
  );
};

export default ProjectsData;