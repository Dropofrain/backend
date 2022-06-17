const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category_name:{
        type:String,
        required:true,
        trim:true
    }

},{
    timestamps:true})
    // createAt, updateAt

    module.exports = mongoose.model('Category',categorySchema)