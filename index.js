// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utilities/db.js";

//import all route
import userRoutes from "./routes/user.routes.js";

dotenv.config()


const app = express();

app.use(
  cors({
  origin: process.env.BASE_URL,
  credentials:true,
  methods:['GET','DELETE','OPTIONS'],
  allowedheaders:['Content-type','Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello cohort!')
})

app.get('/Ankush',(req, res) =>{
    res.send('hello ankush!')
})

app.get('/hey1',(request, response) => {
    res.send('hiiiiii ankush')
})

// console.log();
//connect to db
db();

//user routes
app.use("/api/v1/users", userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

