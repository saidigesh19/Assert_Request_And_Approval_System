const express = require('express')
require('dotenv').config()

const app = express()
PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`The Server is Running at ${PORT}`)
})