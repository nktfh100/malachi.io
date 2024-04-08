import LinkBtn from "@/features//shared/LinkBtn/LinkBtn";
import BriefcaseIcon from "@/features/shared/icons/BriefcaseIcon";
import GithubIcon from "@/features/shared/icons/GithubIcon";
import GlobeIcon from "@/features/shared/icons/GlobeIcon";
import LinkedinIcon from "@/features/shared/icons/LinkedinIcon";
import MailIcon from "@/features/shared/icons/MailIcon";
import PlayIcon from "@/features/shared/icons/PlayIcon";
import { ProjectLink } from "@/projects";

import styles from "./ProjectLinks.module.scss";

const icons = {
	github: <GithubIcon />,
	play: <PlayIcon />,
	linkedin: <LinkedinIcon />,
	mail: <MailIcon />,
	general: <GlobeIcon />,
	briefcase: <BriefcaseIcon />,
};

export default function ProjectLinks({ links }: { links: ProjectLink[] }) {
	return (
		<div className={styles["project__links"]}>
			{links.map((link) => {
				const icon =
					icons[link.icon as keyof typeof icons] || icons.general;

				return (
					<LinkBtn key={link.url} href={link.url} icon={icon}>
						{link.text}
					</LinkBtn>
				);
			})}
		</div>
	);
}
