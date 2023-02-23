
let express = require('express')
let FlightModel = require('../Models/FlightModel')

let FlightRouter = express.Router()

FlightRouter.post('/',async(req,res)=>{
    let flightInfo = req.body
    try{
        let Flight = await FlightModel.create({...flightInfo})
        res.status(201).send(`Flight with id : ${Flight._id} has been created successfully`)
    }catch(err){
        res.send(err)
    }
})

FlightRouter.get('/',async(req,res)=>{
    try{
        let Flights = await FlightModel.find()
        res.status(200).send(Flights)
    }catch(err){
        res.send(err)
    }
})


FlightRouter.get('/:id',async(req,res)=>{
    let id = req.params.id
    try{
        let Flight = await FlightModel.findById(id)
        res.status(200).send(Flight)
    }catch(err){
        res.send(err)
    }
})

FlightRouter.patch('/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let info = req.body
        let Flight = await FlightModel.findByIdAndUpdate(id,{...info},{new:true})
        res.status(204).send(Flight)
    }catch(err){
        res.send(err)
    }
})


FlightRouter.delete('/:id',async(req,res)=>{
    let id = req.params.id
    try{
        let Flight = await FlightModel.findByIdAndDelete(id)
        res.status(202).send(`Flight with id : ${Flight._id} has been deleted successfully`)
    }catch(err){
        res.send(err)
    }
})

module.exports = FlightRouter
