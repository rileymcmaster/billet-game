import { defineConfig } from "vite";
import * as path from "node:path";
import react from "@vitejs/plugin-react";

// const isCodeSandbox = "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

export default defineConfig({
	plugins: [react()],
	root: "src/",
	publicDir: "../public/",
	base: "./",
	build: {
		minify: false,
		sourcemap: true,
		target: "es2018",

		rollupOptions: {
			external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
			output: {
				sourcemapExcludeSources: true,
			},
		},
	},
});
