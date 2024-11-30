import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/types";
import { createEnterAnimProps } from "@/lib/utils";

type ProjectsListProps = {
  projects: Project[];
  children: React.ReactNode;
};

export const ProjectsList = ({ projects, children }: ProjectsListProps) => {
  return (
    <div className="mb-12">
      <motion.h2
        className="text-3xl font-bold text-ctp-mauve mb-6"
        {...createEnterAnimProps(0.5)}
      >
        {children}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
