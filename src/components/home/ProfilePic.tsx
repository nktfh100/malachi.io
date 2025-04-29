import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type ProfilePicProps = {
	className?: string;
	extraProps?: any;
};

export const ProfilePic = ({ extraProps, className }: ProfilePicProps) => {
	return (
		<motion.img
			src="/malachi.jpg"
			alt="Malachi"
			className={cn(
				'w-44 sm:w-48 md:w-60 lg:w-80 mx-auto rounded-full shadow-ctp-overlay0 hover:shadow-ctp-mauve transition-shadow duration-200',
				className
			)}
			style={{
				boxShadow: '0px 0px 20px 3px var(--tw-shadow-color)',
			}}
			{...extraProps}
		/>
	);
};
