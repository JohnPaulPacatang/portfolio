"use client";
import React, { useState, useRef, useEffect } from "react";

export interface Project {
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
    {
      title: "SmileBox",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://smileboxstudioph.com/",
      image: "/assets/smilebox.png",
      description:
        "Contributed to a creative site as an intern at GCWE Web Experts.",
    },
    {
      title: "Virtual Outsourcing Solution",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://virtualoutsourcingsolution.com/",
      image: "/assets/vos.png",
      description:
        "Assisted in developing a business site during my GCWE internship.",
    },
    {
      title: "VTSA International Inc.",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://vtsalifts.com/",
      image: "/assets/vtsa.png",
      description:
        "Helped create a responsive website at GCWE Web Experts.",
    },
    {
      title: "CEC Construction Corporation",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://www.cec.com.ph/",
      image: "/assets/ceccc.png",
      description:
        "Supported the development of a corporate site at GCWE.",
    },
    {
      title: "Doña Alejandra, Inc",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://dai-solutions.ph/",
      image: "/assets/dai.png",
      description:
        "Contributed to building a clean business site at GCWE.",
    },
    {
      title: "G.L. Dizon Construction Services",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://gldizonconstructionservices.com/",
      image: "/assets/gldizon.png",
      description:
        "Assisted in crafting a responsive site during my GCWE internship.",
    },
    {
      title: "Greenridge Resort",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://greenridgeresort.com/",
      image: "/assets/greenridge.png",
      description:
        "Helped design a resort website at GCWE Web Experts.",
    },
    {
      title: "Mega-Re International INC.",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://megare.net.ph/",
      image: "/assets/megare.png",
      description:
        "Contributed to a company site while interning at GCWE.",
    },
    {
      title: "Riconnect Virtual Assistance Services",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://www.riconnect.agency/",
      image: "/assets/riconnect.png",
      description:
        "Supported the creation of a service site at GCWE.",
    },
    {
      title: "ADT Dental Clinic",
      techStack: ["WordPress", "Slider Revolution", "wpBakery"],
      link: "https://adtdentalclinic.com/",
      image: "/assets/adt.png",
      description:
        "Assisted in launching a clinic site during my GCWE internship.",
    },
    {
      title: "St. Clare College of Caloocan Library Management System",
      techStack: ["React", "Supabase", "Tailwind"],
      link: "https://library-app-ditabis.vercel.app/",
      image: "/assets/library.png",
      description:
        "A library management system developed for St. Clare College of Caloocan, allowing students to manage their library accounts, search for books, and view borrowing history.",
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
