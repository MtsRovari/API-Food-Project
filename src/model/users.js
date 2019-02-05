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
        required: false
    },

    adress: {
        type: String,
        required: false
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