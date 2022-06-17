const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    }
 )
 .then(()=>{
    console.log("DataBase connection")
 })