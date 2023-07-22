const express = require("express");
const path = require("path");

const app = express();

const talentRouter = require("./router/talent.routes");
const messageRouter = require("./router/message.routes");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/hbs", (req, res) => {
  res.render("index", {
    title: "Huku Yues",
    caption: "Kunakuanga na snow",
  });
});

app.use("/talents", talentRouter);
app.use("/messages", messageRouter);
app.get("/", (req, res) => {
  // path.join(__dirname, ".", "public", "skimountain.jpg");
  res.sendFile(path.join(__dirname, "public", "images", "skimountain.jpg"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
