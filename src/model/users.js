const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    adress: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

User.plugin(mongoosePaginate);

mongoose.model('User', User);