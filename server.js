const express = require("express");
const path = require("path");
const projects = require("./projects.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(__dirname)); // serve index.html, style.css, main.js from project root

// API: get projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// API: contact endpoint (log or email)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact:", { name, email, message });

  // TODO: integrate email service (SendGrid, Nodemailer, etc.)
  res.json({ ok: true });
});

// Fallback to index.html for any other route (optional SPA behaviour)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});
