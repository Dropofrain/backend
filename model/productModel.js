const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        reuired: true,
        trim: true
    },
    product_description: {
        type: String,
        required: true
    },

    product_price: {
        type: Number,
        required: true
    },

    // count_in_stock:{
    //     type:Number,
    //     required: true
    // },

    product_image: {
        type: String,
        required: true,
    },

    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    Rating: {
        type: Number,
        default: 1
    },
    no_of_reviews:{
        type: Number,
        default: 0
    }

}, { timestamps: true })

module.exports = mongoose.model('product ', productSchema)