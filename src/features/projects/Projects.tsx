import { ProjectData } from "@/projects";

import Project from "./Project";
import styles from "./Projects.module.scss";

export default function Projects({
	projects,
	title,
}: {
	projects: ProjectData[];
	title: string;
}) {
	return (
		<section className={styles["projects"]}>
			<h1 className={styles["projects__title"]}>{title}</h1>
			<div className={styles["projects__list"]}>
				{projects.map((projectData, i) => (
					<>
						<Project
							key={projectData.title}
							projectData={projectData}
							imgPosition={i % 2 == 0 ? "l" : "r"}
						/>
						{i != projects.length - 1 && (
							<div className={styles["projects__divider"]} />
						)}
					</>
				))}
			</div>
		</section>
	);
}
