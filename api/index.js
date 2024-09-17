const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const products = require("./constants/products.js");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, _, next) => {
  if (req.headers["x-dummy-token"] === process.env.DEFAULT_TOKEN) next();
  else next("Not authorized!");
});

app.get("/api/users", (_, res) => {
  res.send(users);
});

app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.status(200).send();
});

app.post("/api/users", (req, res) => {
  if (users.some((user) => user.name === req.body.name)) {
    res.status(400).send("Nome já cadastrado");
  } else {
    const newUser = { id: uuidv4(), ...req.body };
    users.push(newUser);
    res.send(newUser);
  }
});

app.get("/api/products", (_, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  const productFiltered = products.find(product => product.key === req.params.id)
  res.status(200).send(productFiltered);
});

app.listen(8000);
