//const { request, response } = require('express')
const express = require('express')
require('dotenv').config()

const db = require('./Database/connection')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


const demoroute = require('./route/demoRoute')//for import demoroute
const CategoryRoute = require('./route/categoryRoute')
const ProductRoute = require('./route/productRoute')
const UserRoute = require('./route/userRoute')
const OrderRoute = require('./route/orderRoute')


const port = process.env.PORT
const app = express()

//middleware
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(cors())

//routes
app.use('/api', demoroute)
app.use('/api', CategoryRoute)
app.use('/api', ProductRoute)
app.use('/api', UserRoute)
app.use('/api', OrderRoute)

app.use('/api/uploads', express.static('public/uploads'))

// methods
//app.get(url, function (request,response){statement})
//response - to send data to user
//request - to 
app.get('/', (request, response) => {
    response.send("welcome to express js.")
})


// to start server
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})