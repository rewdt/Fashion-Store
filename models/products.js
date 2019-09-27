const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    product_name: 'String',
    product_description: {
        type: 'String'
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text: String,
        date_created: {
            type: Date,
            default: Date.now()
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    color: {
        type: 'String'
    }
})

module.exports = mongoose.model('Products', productSchema)