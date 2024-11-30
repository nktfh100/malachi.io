import { Project } from "@/lib/types";

export const featuredProjects: Project[] = [
  {
    name: "Campass",
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
    links: { GitHub: "https://github.com/nktfh100/campass" },
  },
  {
    name: "Super Gobblet Online",
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
    links: {
      GitHub: "https://github.com/nktfh100/super-gobblet-online",
      "Google Play":
        "https://play.google.com/store/apps/details?id=com.nktfh100.supergobbletonline",
    },
  },
  {
    name: "Taki Online",
    description:
      "A real-time multiplayer web app implementation of the cards game Taki.",
    image: "/projects/taki.webp",
    date: "January 2021",
    technologies: ["React", " Node.js", "Socket.io"],
    links: {},
  },
  {
    name: "Music Player",
    description:
      "A fully functional local music player that allows you to download songs from YouTube. Has support for playlists, shuffle, search and history",
    image: "/projects/music_player.webp",
    date: "August 2019",
    technologies: ["JavaScript", "React", "Electron"],
    links: {},
  },
];

export const otherProjects: Project[] = [
  {
    name: "Gool Downloader",
    description:
      "Python script that downloads videos for offline use from https://gool.co.il/",
    date: "April 2024",
    technologies: ["Python", "selenium", "ffmpeg"],
    links: {
      GitHub: "https://github.com/nktfh100/gool-downloader",
    },
  },
  {
    name: "Stremio Simkl Watchlists",
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
    links: {
      GitHub: "https://github.com/nktfh100/stremio-simkl",
      Website: "https://stremio-simkl.malachi.io",
    },
  },
  {
    name: "Exercises Engine",
    description:
      'A "fill in the blanks" exercises engine (web app), originally built for Exercitia Latina.',
    date: "September 2023",
    technologies: ["TypeScript", "Next.js", "Sass", "Zustand"],
    links: {
      GitHub: "https://github.com/nktfh100/exercises-engine",
      Demo: "https://exercises-demo.surge.sh",
    },
  },
  {
    name: "Hamal Updates",
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
    links: {
      GitHub: "https://github.com/nktfh100/hamal-updates",
    },
  },
  {
    name: "Israel Fire Stations",
    description:
      "A web app that displays all the fire stations in israel on a map. (Weekend project)",
    date: "Febuary 2023",
    technologies: ["TypeScript", "React", "Scss", "Leaflet"],
    links: {
      GitHub: "https://github.com/nktfh100/israel-fire-stations",
      Website: "https://fire-stations.nktfh100.com",
    },
  },
  {
    name: "Planets Facts Website",
    description:
      "A website I made for the frontendmentor.io challenge. The website works on desktops, tablets and phones. I also added animations using framer motion to make it pop more.",
    date: "Fabuary 2023",
    technologies: ["TypeScript", "React", "Scss", "Framer Motion"],
    links: {
      GitHub: "https://github.com/nktfh100/planets-facts-challenge",
      Website: "https://planets-facts.nktfh100.com/",
    },
  },
];
