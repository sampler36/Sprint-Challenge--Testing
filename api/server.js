const express = require('express');

const games = require('../games/gamesModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ May: 'The games Begin' });
});

server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post('/games', async (req, res) => {
  const { title, genre } = req.body;

  if (title && genre) {
    try {
      res.status(200).json({
         message: 'New game Added my friend' });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ 
      message: 'Point of entry not allowed' });
  }
});

module.exports = server;
