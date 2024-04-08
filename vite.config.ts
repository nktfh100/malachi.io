import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
