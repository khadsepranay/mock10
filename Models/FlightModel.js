let mongoose = require('mongoose')

let FlightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
  },{versionKey:false})

  let FlightModel = mongoose.model('Flights',FlightSchema)

  module.exports = FlightModel
