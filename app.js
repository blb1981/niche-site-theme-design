// Reference for this setup: https://raddy.dev/blog/nodejs-express-layouts-and-partials/

const path = require("path");
const express = require("express");
// const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000;

// Static Files

app.use(express.static("public"));

// Template Engine Settings
// Default layout is the frontend.ejs file
// Other templates below will use different layouts, specified in the route

// app.use(expressLayouts);
// app.set("layout", "./layouts/frontend.ejs");
app.set("view engine", "ejs");

// Routes... Add future pages here
// Frontend pages

const details = {
  siteName: "Pilot Headquarters",
};

app.get("", (req, res) => {
  res.render("index", { title: "Home Page", ...details });
});

app.get("/single", (req, res) => {
  res.render("single", { title: "Single Post", ...details });
});

// Server

app.listen(port, () => {
  console.log("Listening on http://localhost:5000");
});
