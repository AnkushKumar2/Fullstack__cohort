// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()


const app = express()

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true,
  methods:['GET','DELETE','OPTIONS'],
  allowedheaders:['Content-type','Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello cohort!')
})

app.get('/Ankush',(req, res) =>{
    res.send('hello ankush!')
})

app.get('/hey1',(request, response) => {
    res.send('hiiiiii ankush')
})

console.log();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

