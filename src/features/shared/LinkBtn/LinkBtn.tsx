import styles from "./LinkBtn.module.scss";

export default function LinkBtn({
	children,
	icon,
	href,
}: {
	children: React.ReactNode;
	icon: React.ReactNode;
	href: string;
}) {
	return (
		<a className={styles["button"]} href={href} target="_blank">
			{icon}
			<span>{children}</span>
		</a>
	);
}
