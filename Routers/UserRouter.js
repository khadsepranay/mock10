let express = require('express')

let UserRouter = express.Router()
let UserModel = require('../Models/UserModel')



UserRouter.post('/register',async(req,res)=>{
    try{
        let {email,password,name} = req.body
        await UserModel.create({email,password,name})
        res.status(201).send(`User with email : ${email} has been created successfully`)
    }catch(err){
        res.send(err)
    }
})

UserRouter.post('/login',async(req,res)=>{
    let {email,password} = req.body
    try{
        let User = await UserModel.findOne({email})
        if(User.password==password){
            res.send(`Login Successful with id : ${User._id}`)
        }else{
            res.status(201).send('Password is wrong')
        }
    }catch(err){
        res.send(`User with email : ${email} is not found`)
    }
})

module.exports = UserRouter