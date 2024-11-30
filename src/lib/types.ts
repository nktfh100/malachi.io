export type Project = {
	name: string;
	description: string;
	date: string;
	technologies: string[];
	links: Record<string, string>;
	image?: string;
};
