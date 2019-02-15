const mongoose = require('mongoose');

const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        
        const restaurants = await Restaurant.paginate({}, { page, limit: 50 });

        return res.json(restaurants);
    },

    async view(req, res){
        const restaurant = await Restaurant.findById(req.params.id);

        return res.json(restaurant);
    },

    async create(req, res){
        const restaurant = await Restaurant.create(req.body);

        return res.json(restaurant);
    },

    async edit(req, res){
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(restaurant);
    },

    async delete(req, res){
        await Restaurant.findByIdAndRemove(req.params.id);

        return res.send()
    }
};
