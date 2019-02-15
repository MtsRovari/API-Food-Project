const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

Category.plugin(mongoosePaginate);

mongoose.model('Category', Category);