const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

console.log("Hello from node");