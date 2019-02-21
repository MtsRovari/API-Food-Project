const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
    async index(req, res){
        const categories = await Category.find();

        return res.json(categories);
    },

    async create(req, res){
        const category = await Category.create(req.body);

        if(category) {
            res.send(true);
        } else {
            res.send(false);
        }
    },

    async delete(req, res){
        await Category.findByIdAndRemove(req.params.id);

        res.send(true);
    }
};
