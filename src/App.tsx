import About from "@/features/about/About";
import Header from "@/features/header/Header";
import Projects from "@/features/projects/Projects";

import { projects, smallerProjects } from "./projects";

function App() {
	return (
		<>
			<Header />
			<About />
			<Projects projects={projects} title="Projects" />
			<Projects
				projects={smallerProjects}
				title="Smaller/Older Projects"
			/>
		</>
	);
}

export default App;
