import { Project } from "@/lib/types";
import { createEnterAnimVariants } from "@/lib/utils";
import { motion } from "motion/react";
import { ProjectCardTech } from "./ProjectCardTech";
import { ProjectCardLink } from "./ProjectCardLink";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col p-6 bg-ctp-surface0 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={createEnterAnimVariants(0.3, 20)}
    >
      <div className="flex justify-center">
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="w-[40rem] mb-4 rounded"
          />
        )}
      </div>

      <h3 className="text-2xl font-bold text-ctp-peach mb-2">{project.name}</h3>
      <p className="text-ctp-text mb-4">{project.description}</p>

      <div className="flex-1 flex flex-col justify-end">
        <p className="text-ctp-text font-bold mb-4">{project.date}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <ProjectCardTech key={tech}>{tech}</ProjectCardTech>
          ))}
        </div>
        <div className="flex gap-4">
          {Object.entries(project.links).map(([title, url]) => (
            <ProjectCardLink key={title} to={url}>
              {title}
            </ProjectCardLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
