const express = require("express");
const courses = require("./routes/courses");
const genres = require("./routes/genres");
const home = require("./routes/home");
const logger = require("./middleware/logger");
const app = express();

app.use(express.json()); //middleware
app.use(logger);
app.use("/api/courses", courses);
app.use("/api/genres", genres);
app.use("/", home);

const port = process.env.PORT || 3000;
console.log(port);
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
