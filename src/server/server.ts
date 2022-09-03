import express from "express";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || "8080";

const app = express();
app.use(express.json());

console.log(`Starting server in ${process.env.NODE_ENV} mode`);
if (process.env.NODE_ENV === "production") {
	app.use(express.static("build/client"));
} else if (process.env.NODE_ENV === "development") {
	const { createServer } = await import("vite");
	const vieteServer = await createServer({
		configFile: "vite.config.ts",
	});
	app.use(vieteServer.middlewares);
} else {
	throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
}

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
