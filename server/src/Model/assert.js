const mongoose = require('mongoose')

const assertSchema = new mongoose.Schema({
    assert_name: {type:String , enum:['Mouse', 'Keyboard', 'Laptop', 'Mobile'], required:true},
    user_id:{type:Number, required:true},
    is_active:{type:Boolean, required:true},
    assert_id:{type:Number, required:true},
    reason:{type:String, required:true},
    status:{type:String, enum:['Pending', 'Approved', 'Rejected'], default:'pending', required:true},
    admin_comment:{type:String, required:true},
},{timestamps:true})

module.exports = mongoose.model("assertSchema", assertSchema)