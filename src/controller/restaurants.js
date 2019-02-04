const mongoose = require('mongoose');

const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        
        const Restaurants = await Restaurant.paginate({}, { page, limit: 50 });

        return res.json(Restaurants);
    },

    async view(req, res){
        const Restaurant = await Restaurant.findById(req.params.id);

        return res.json(Restaurant);
    },

    async create(req, res){
        const Restaurant = await Restaurant.create(req.body);

        return res.json(Restaurant);
    },

    async edit(req, res){
        const Restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(Restaurant);
    },

    async delete(req, res){
        await Restaurant.findByIdAndRemove(req.params.id);

        return res.send()
    }
};
