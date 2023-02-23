let mongoose = require('mongoose')

let BookingSchema = mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    flight : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Flights'
    }
},{versionKey:false})

let BookingModel = mongoose.model('Bookings',BookingSchema)

module.exports = BookingModel