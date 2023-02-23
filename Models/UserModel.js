let mongoose = require('mongoose')

let UserSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{versionKey:false})

let UserModel = mongoose.model('Users',UserSchema)

module.exports = UserModel