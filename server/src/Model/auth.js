const  mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type:String, required:true},
    role: {type:String, enum:['Employee', 'Admin'], default:'Employee', required:true},
    password: {type:String, required:true}
},{
    timestamps:true
});

module.exports = mongoose.model("userSchema", userSchema)
