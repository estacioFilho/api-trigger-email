import app from "./config";
import express from 'express';
import {config} from 'dotenv';

config();
const PORT = process.env.PORT || 3323;

//middlewares
app.use(express.json()); //parse json

// routes
app.get('/', (req, res) => {res.send('Api to trigger email.')})

// start server
app.listen(PORT, () => console.log(`Running server on port:${PORT}`));


