import express from "express";
import users from "./usersRoutes.js";
import products from "./productsRoutes.js";
import cors from "cors";

const routes = (app) => {
  app.use(cors());

  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Home page" });
  });

  app.use(express.json(), users, products);
};

export default routes;
