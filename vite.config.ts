import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	mode: process.env.NODE_ENV,
	plugins: [svelte()],
	publicDir: "src/client/public",
	appType: "spa",
	server: { middlewareMode: true },
	build: {
		target: "esnext",
		outDir: "build/client",
		emptyOutDir: true,
		sourcemap: true,
	},
});
