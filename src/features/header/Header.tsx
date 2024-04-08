import BriefcaseIcon from "@/features/shared/icons/BriefcaseIcon";
import GithubIcon from "@/features/shared/icons/GithubIcon";
import LinkedinIcon from "@/features/shared/icons/LinkedinIcon";
import MailIcon from "@/features/shared/icons/MailIcon";
import LinkBtn from "@/features/shared/LinkBtn/LinkBtn";

import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles["header"]}>
			<div>
				<img
					className={styles["header__img"]}
					src="https://avatars.githubusercontent.com/u/23655815?v=4"
					alt="Malachi Turjeman"
				/>
			</div>
			<div>
				<h1 className={styles["header__name"]}>Hey! i'm Malachi</h1>
				<h2 className={styles["header__title"]}>
					Full Stack Developer
				</h2>
				<div className={styles["header__buttons"]}>
					<LinkBtn href="mailto:me@malachi.io" icon={<MailIcon />}>
						Email
					</LinkBtn>
					<LinkBtn
						href="https://github.com/nktfh100"
						icon={<GithubIcon />}
					>
						GitHub
					</LinkBtn>
					<LinkBtn
						href="https://www.linkedin.com/in/malachi-turjeman"
						icon={<LinkedinIcon />}
					>
						LinkedIn
					</LinkBtn>
					<LinkBtn
						href="https://resume.malachi.io"
						icon={<BriefcaseIcon />}
					>
						Resume
					</LinkBtn>
				</div>
			</div>
		</header>
	);
}
