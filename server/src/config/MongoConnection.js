const mongoose = require('mongoose')

const dataBase = mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log("MongoDB Connection is Succesfull")
})

module.exports = dataBase;