const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    restaurant_id: {
        type: String,
        required: true
    },

    category_id: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

Product.plugin(mongoosePaginate);

mongoose.model('Product', Product);