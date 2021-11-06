const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    // designer name or 'Made in X' information can go here to reduce description length
    origin: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Product = model('Product', productSchema)

module.exports = Product;