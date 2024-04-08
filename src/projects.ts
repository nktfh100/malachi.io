export interface ProjectLink {
	text: string;
	url: string;
	icon: string;
	backgroundColor: string;
	backgroundColorHover: string;
}

export interface ProjectData {
	title: string;
	description: string;
	date: string;
	technologies: string[];
	links: ProjectLink[];
	image?: string;
}

const githubIconColors = {
	backgroundColor: "#994fe2",
	backgroundColorHover: "#8444c5",
};

const generalIconColors = {
	backgroundColor: "#3777e2",
	backgroundColorHover: "#2e67c4",
};

export const projects: ProjectData[] = [
	{
		title: "Campass",
		description:
			"A system that simplifies the process of inviting and admitting guests to various events. Users can easily invite their guests to an event by adding them to the system, invited guests can then log in to the system to get their entry pass as a QR code which can be scanned at the event entrance to let them in.",
		date: "March 2024",
		image: "/projects/campass.webp",
		technologies: [
			"TypeScript",
			"Node.js",
			"React",
			"Fastify",
			"Sqlite",
			"Sass",
			"Docker",
			"NGINX",
		],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/campass",
				icon: "github",
				...githubIconColors,
			},
		],
	},
	{
		title: "Super Gobblet Online",
		description:
			"A real-time multiplayer app inspired by the board game Gobblet. The game is played on a 3x3 board where each player has 3 pieces of 3 different sizes. The goal is to get 3 pieces in a row (Like Tic Tac Toe).",
		date: "August 2021",
		image: "/projects/gobblet.webp",
		technologies: [
			"React Native",
			"JavaScript",
			"MongoDB",
			"Socket.io",
			"Node.js",
			"Zustand",
			"Expo",
		],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/super-gobblet-online",
				icon: "github",
				...githubIconColors,
			},
			{
				text: "Google Play",
				url: "https://play.google.com/store/apps/details?id=com.nktfh100.supergobbletonline",
				icon: "play",
				backgroundColor: "#4CAF50",
				backgroundColorHover: "#419844",
			},
		],
	},
	{
		title: "Taki Online",
		description:
			"A real-time multiplayer web app implementation of the cards game Taki.",
		image: "/projects/taki.webp",
		date: "January 2021",
		technologies: ["React", " Node.js", "Socket.io"],
		links: [],
	},
	{
		title: "Music Player",
		description:
			"A fully functional local music player that allows you to download songs from YouTube. Has support for playlists, shuffle, search and history",
		image: "/projects/music_player.webp",
		date: "August 2019",
		technologies: ["JavaScript", "React", "Electron"],
		links: [],
	},
];

export const smallerProjects: ProjectData[] = [
	{
		title: "Stremio Simkl Watchlists",
		description: "A Stremio addon that displays your Simkl Watchlists.",
		date: "December 2023",
		technologies: [
			"TypeScript",
			"Node.js",
			"Express.js",
			"Redis",
			"React",
			"Zustand",
			"Docker",
		],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/stremio-simkl",
				icon: "github",
				...githubIconColors,
			},
			{
				text: "Website",
				url: "https://stremio-simkl.nktfh100.com ",
				icon: "general",
				...generalIconColors,
			},
		],
	},
	{
		title: "Exercises Engine",
		description:
			'A "fill in the blanks" exercises engine (web app), originally built for Exercitia Latina.',
		date: "September 2023",
		technologies: ["TypeScript", "Next.js", "Sass", "Zustand"],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/exercises-engine",
				icon: "github",
				...githubIconColors,
			},
			{
				text: "Demo",
				url: "https://exercises-demo.surge.sh",
				icon: "general",
				...generalIconColors,
			},
		],
	},
	{
		title: "Hamal Updates",
		description:
			"A discord web hook to get live hamal updates. To make this bot I had to reverse engineer how hamal.co.il gets their live updates.",
		date: "October 2023",
		technologies: [
			"TypeScript",
			"Node.js",
			"socket.io",
			"discord.js",
			"Docker",
		],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/hamal-updates",
				icon: "github",
				...githubIconColors,
			},
		],
	},
	{
		title: "Israel Fire Stations",
		description:
			"A web app that displays all the fire stations in israel on a map. (Weekend project)",
		date: "Febuary 2023",
		technologies: ["TypeScript", "React", "Scss", "Leaflet"],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/israel-fire-stations",
				icon: "github",
				...githubIconColors,
			},
			{
				text: "Website",
				url: "https://fire-stations.nktfh100.com",
				icon: "general",
				...generalIconColors,
			},
		],
	},
	{
		title: "Planets Facts Website",
		description:
			"A website I made for the frontendmentor.io challenge. The website works on desktops, tablets and phones. I also added animations using framer motion to make it pop more.",
		date: "Fabuary 2023",
		technologies: ["TypeScript", "React", "Scss", "Framer Motion"],
		links: [
			{
				text: "GitHub",
				url: "https://github.com/nktfh100/planets-facts-challenge",
				icon: "github",
				...githubIconColors,
			},
			{
				text: "Website",
				url: "https://planets-facts.nktfh100.com/",
				icon: "general",
				...generalIconColors,
			},
		],
	},
];
