
const express = require('express');
require('dotenv').config();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/shivam', (req,res)=>{
    res.send("hello bhai")
})
app.get('/eweb', (req,res)=>{
    res.send("<h2>working on project </h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
// console.log("lokendra pandey");