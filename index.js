const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/foo", (req, res, next) => {
  const random = Math.random();

  if (random < 0.5) {
    res.send("sometimes this");
  } else {
    next();
  }
});

app.get("/foo", (req, res) => {
  res.send("and sometimes that");
});

app.get(/^\/user(name)?$/, (req, res) => {
  res.send("User route");
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}`);
});

app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("Check the console");
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
