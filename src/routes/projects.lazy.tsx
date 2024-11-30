import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { createEnterAnimProps } from "@/lib/utils";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ProjectsList } from "@/components/projects/ProjectsList";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-20 lg:px-40 py-10">
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-ctp-mauve mb-14 sm:mb-2 hover:text-ctp-lavender transition-colors duration-300"
        {...createEnterAnimProps(0.3)}
      >
        My Projects
      </motion.h1>
      <motion.div {...createEnterAnimProps(0.6)}>
        <ProjectsList projects={featuredProjects}>
          Featured Projects
        </ProjectsList>
        <ProjectsList projects={otherProjects}>Smaller Projects</ProjectsList>
      </motion.div>
    </div>
  );
}
