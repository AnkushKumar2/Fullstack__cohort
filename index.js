// const express = require('express');
import express, { response } from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello cohort!')
})

app.get('/Ankush',(req, res) =>{
    res.send('hello ankush!')
})

app.get('/hey1',(request, response) => {
    res.send('hiiiiii ankush')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

