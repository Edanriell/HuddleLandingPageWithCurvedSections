import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			"@app": "src/app",
			"@pages": "src/pages",
			"@routes": "src/routes",
			"@widgets": "src/widgets",
			"@shared": "src/shared"
		},
		files: {
			appTemplate: "src/app/app.html",
			routes: "src/app/routes"
		}
	}
};

export default config;
