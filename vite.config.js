import { defineConfig } from "vite";
import * as path from "node:path";
import react from "@vitejs/plugin-react";

// export default defineConfig({
// 	plugins: [react()],
// 	root: "src/",
// 	publicDir: "../public/",
// 	base: "./",
// });

const dev = defineConfig({
	plugins: [react()],
	root: "./",
	publicDir: "/public/",
	base: "./",
	server: {
		host: true,
		open: true, // Open if it's not a CodeSandbox
	},
});

const build = defineConfig({
	publicDir: true,
	build: {
		minify: true,
		sourcemap: true,
		target: "es2018",
		lib: {
			formats: ["cjs", "es"],
			entry: "src/index.jsx",
			fileName: "[name]",
		},
		rollupOptions: {
			external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
			output: {
				sourcemapExcludeSources: true,
			},
		},
	},
});

export default process.argv[2] ? build : dev;
