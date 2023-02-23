let express = require('express')
let DashboardRouter = express.Router()
let BookingModel = require('../Models/BookingModel')



DashboardRouter.get('/',async(req,res)=>{
    try{
        let details = await BookingModel.find().populate(['user','flight'])
        res.status(200).send(details)
    }catch(err){
        res.send(err)
    }
})

module.exports = DashboardRouter