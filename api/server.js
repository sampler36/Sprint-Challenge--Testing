const express = require("express");

const games = require("../games/gamesModel");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ May: "The games Begin" });
});

server.get("/games", async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post("/games", (req, res) => {
  const game = req.body;
  if (!game.title || !game.genre) {
    res.status(405).json({ message: "Not Allowed change Entry!" });
  } else {
    games.insert(game);
    res.status(200).json({ message: "New game Added" });
  }
});

module.exports = server;
