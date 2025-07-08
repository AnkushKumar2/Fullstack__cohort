// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utilities/db.js";

dotenv.config()


const app = express();

app.use(
  cors({
  origin: process.env.BASE_URL,
  credentials:true,
  methods:['GET','DELETE','OPTIONS'],
  allowedHeaders:['Content-type','Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//import all route
import userRoutes from './routes/user.routes.js';
//user routes
app.use("/api/v1/users", userRoutes)
// app.use('/api/users', userRoutes);
const port = process.env.PORT || 5500

app.get("/", (req, res) => {
  res.send('Hello cohort!')
})

app.get("/Ankush",(req, res) =>{
    res.send('hello ankush!')
})

app.get("/hey1",(request, response) => {
    res.send('hiiiiii ankush')
})

// console.log();
//connect to db
db();



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

