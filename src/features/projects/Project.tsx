import { ProjectData } from "@/projects";

import styles from "./Project.module.scss";
import ProjectLinks from "./ProjectLinks";

export default function Project({
	projectData,
	imgPosition,
}: {
	projectData: ProjectData;
	imgPosition: "l" | "r";
}) {
	return (
		<div
			className={`${styles["project"]} ${
				styles["project--" + imgPosition]
			}`}
		>
			<img
				className={styles["project__image"]}
				src={projectData.image}
				alt=""
			/>
			<div className={styles["project__content"]}>
				<p className={styles["project__title"]}>{projectData.title}</p>
				<p className={styles["project__date"]}>{projectData.date}</p>
				<p className={styles["project__desc"]}>
					{projectData.description.split("\n").map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</p>
				<span className={styles["project__tech"]}>
					<p>
						<strong>Technologies: </strong>
					</p>
					<p>{projectData.technologies.join(", ")}</p>
				</span>
				{projectData.links.length > 0 && (
					<ProjectLinks links={projectData.links} />
				)}
			</div>
		</div>
	);
}
