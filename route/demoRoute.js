const express = require('express')
const { welcome } = require('../controller/demoController')
const router = express.Router()

router .get('/first',(req,res)=>{
res.send("this message from rout")
})

router.get('/second',welcome)

module.exports = router