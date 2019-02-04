const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        
        const users = await User.paginate({}, { page, limit: 50 });

        return res.json(users);
    },

    async view(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async create(req, res){
        const user = await User.create(req.body);

        return res.json(user);
    },

    async edit(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },

    async delete(req, res){
        await User.findByIdAndRemove(req.params.id);

        return res.send()
    }
};
