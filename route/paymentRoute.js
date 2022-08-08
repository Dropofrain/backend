const express = require('express')
const { sendStripekey, processPayment } = require('../controller/paymentController')
const router = express.Router()


router.post('/processpayment',processPayment)
router.get('/getStripeAPIKey',sendStripekey)


module.exports=router