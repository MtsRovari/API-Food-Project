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

    // async login(req, res) {
    //     const user = await User.findOne({email: req.params.email, password: req.params.password});

    //     // return res.json(req.params);
    // },

    async register(req, res){

        const { name, email, password, confirm_password } = req.body;

        let errors = [];

        if (!name || !email || !password || !confirm_password){
            errors.push({ msg: "Preencha todos os campos" });
        }

        if (password !== confirm_password){
            errors.push({ msg: "As senhas não são identicas" });
        }

        if (password.length < 6){
            errors.push({ msg: "A senha deve ter mais que 6 caracteres" });
        }

        if (errors.length > 0) {
            return res.json({
                errors,
                name,
                email
            });

        } else {
            res.send('res');
        }

        // const user = await User.create(req.body);

        // return res.json(user);
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
