require('dotenv').config()
const express = require('express')
let cors = require('cors')
let app = express()
let connect = require('./Config/db')
let UserRouter = require('./Routers/UserRouter')
let FlightRouter = require('./Routers/FlightRouter')
let BookingRouter = require('./Routers/BookingRouter')
let DashboardRouter = require('./Routers/DashboardRouter')

let Port = process.env.Port
let DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())

app.use('/',UserRouter)
app.use('/flights',FlightRouter)
app.use('/booking',BookingRouter)
app.use('/dashboard',DashboardRouter)





connect(DB_URL).then((res)=>{
    app.listen(Port,()=>{
        console.log('Listening to port 8000')
    })
})

//userId : 63f707775b2367f41303fe22