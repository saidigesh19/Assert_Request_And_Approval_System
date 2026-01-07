const mongoose = require('mongoose')

const assertSchema = new mongoose.Schema({
    assert_name: {type:String , enum:['Mouse', 'Keyboard', 'Laptop', 'Mobile'], required:true},
    reason:{type:String, required:true},
    status:{type:String, enum:['Pending', 'Approved', 'Rejected'], default:'Pending', required:true},
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
},{timestamps:true})

module.exports = mongoose.model("AssetRequest", assertSchema)