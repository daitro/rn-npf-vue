const express = require("express");
const config = require("config");
const path = require("path");
const app = express();
const port = config.get("PORT") || 3000;
const newsRoutes = require("../router/news");
const historyRoutes = require("../router/history");
const corsMiddleware = require("../middleware/cors");

app.use(corsMiddleware);

app.use("/api/news", newsRoutes);
app.use("/api/history", historyRoutes);

if (process.env.NODE_ENV === "production") {
	app.use("/", express.static(path.join(__dirname, "client", "build")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
