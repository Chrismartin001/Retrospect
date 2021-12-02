const express = require("express");
const app = express();
const morgan = require("morgan");
const websiteRoutes = require("./routes/websites");
const reviewRoutes = require("./routes/reviews");
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/websites", websiteRoutes);

app.listen(PORT, () => {
  console.log(`Express Server is running on PORT http://localhost:${PORT}`);
});
