import React from "react";
import FadeIn from "@/app/components/animations/FadeIn";

const TechStack = () => {
  const sections = [
    {
      title: "Frontend",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "SCSS",
        "Styled Components",
        "Vite",
        "Webpack",
        "ESLint",
        "Prettier",
      ],
    },
    {
      title: "Backend",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "PHP",
        "Express.js",
        "NestJS",
        "FastAPI",
        "Spring Boot",
        "Laravel",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "OAuth",
        "JWT",
        "LDAP",
        "REST",
        "GraphQL",
        "gRPC",
        "AWS Lambda",
        "Firebase Functions",
      ],
    },
  ];

  return (
    <div className="w-full space-y-8 p-4">
      <FadeIn>
        <h1 className="text-4xl font-bold text-black">Tech Stack</h1>
      </FadeIn>

      {sections.map((section, index) => (
        <FadeIn key={section.title} delay={index * 0.1}>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-black">{section.title}</h2>

            <div className="flex flex-wrap gap-3">
              {section.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-2 py-1 rounded-lg text-sm text-black transition-colors duration-200 border border-neutral-400"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default TechStack;
