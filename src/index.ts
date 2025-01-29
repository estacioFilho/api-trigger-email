import { app } from "./config/";
import express from "express";
import { config } from "dotenv";
import { router } from "./routes";
import cors from "cors";

config();
const PORT = process.env.PORT ? parseInt(process.env.PORT,10) : 3323;

app.use(cors());

//middlewares
app.use(express.json()); //parse json

// routes
app.get("/", (req, res) => {
  res.send("Api to trigger email.");
});
app.use(router);

// start server
app.listen(PORT, '0.0.0.0',() => console.log(`Running server on port:${PORT}`));
