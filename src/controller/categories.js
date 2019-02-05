const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        
        const categories = await Category.paginate({}, { page, limit: 50 });

        return res.json(categories);
    },

    async create(req, res){
        const category = await Category.create(req.body);

        return res.json(category);
    },

    async delete(req, res){
        await Category.findByIdAndRemove(req.params.id);

        return res.send()
    }
};
