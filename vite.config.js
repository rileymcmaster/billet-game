import { defineConfig } from "vite";
import * as path from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	root: "src/",
	publicDir: "../public/",
	base: "./",
});
