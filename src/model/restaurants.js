const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const Restaurant = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    adress: {
        type: String,
        required: true
    },

    delivery: {
        type: Boolean,
        required: true
    },

    logo: {
        type: String,
        required: true
    },

    cover: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

Restaurant.plugin(mongoosePaginate);

mongoose.model('Restaurant', Restaurant);