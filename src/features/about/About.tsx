import styles from "./About.module.scss";

export default function About() {
	return (
		<section className={styles["about"]}>
			<div className={styles["about__content"]}>
				<p>
					A self-taught, passionate Full Stack developer from Israel
					🇮🇱
				</p>
				<p>
					I have been programming since the age of 12 (started with
					scratch)
				</p>
				<p>
					I am a self-learner who loves to learn new things, and
					always looking to improve my skills and knowledge.
				</p>
			</div>
		</section>
	);
}
