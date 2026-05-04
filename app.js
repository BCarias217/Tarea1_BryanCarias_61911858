const express = require("express");
const app = express();

app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send("GET funcionando");
});

// POST
app.post("/", (req, res) => {
  res.send("POST funcionando");
});

// PUT
app.put("/", (req, res) => {
  res.send("PUT funcionando");
});

// PATCH
app.patch("/", (req, res) => {
  res.send("PATCH funcionando");
});

// DELETE
app.delete("/", (req, res) => {
  res.send("DELETE funcionando");
});

// HEAD
app.head("/", (req, res) => {
  res.status(200).end();
});

// OPTIONS
app.options("/", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
  res.send();
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});