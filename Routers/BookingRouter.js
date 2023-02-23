let express = require('express')
let BookingRouter = express.Router()
let BookingModel = require('../Models/BookingModel')

BookingRouter.post('/',async(req,res)=>{
    let user = req.headers.userid
    let flight = req.headers.flightid
    try{
        let Booking = await BookingModel.create({user,flight})
        res.status(201).send(`Flight with id : ${Booking._id} has been created successfully`)
    }catch(err){
        res.send(err)
    }
})

module.exports = BookingRouter