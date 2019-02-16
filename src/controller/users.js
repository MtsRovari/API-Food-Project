const mongoose = require('mongoose');

const User = mongoose.model('User');

const bcrypt = require('bcryptjs');

const passport = require('passport');

module.exports = {
    async index(req, res){
        
        const { page = 1 } = req.query;
        
        const users = await User.paginate({}, { page, limit: 50 });

        return res.json(users);
    },

    async login(req, res, next) {

        let errors = [];

        passport.authenticate('local', (err, user, info) => {
            if (err) { errors.push({ msg: next(err) }) }

            if (!user) { 
                errors.push({ msg: "Email ou senha incorretos" }) 
            } else {
                req.logIn(user, err => {
                    if (err) { errors.push({ msg: next(err) }) }
                    
                    return res.json(true);
                });
            }

            if (errors.length > 0) {
                return res.json({
                    errors,
                    email: req.body.email
                });
            }

        })(req, res, next);
    },

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
            User.findOne({ email }).then(user => {
                if(user) {
                    errors.push({msg: "Este usuário já existe"});

                    return res.json({
                        errors,
                        name,
                        email
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;

                        newUser.password = hash;

                        newUser
                            .save()
                            .then(res.send(true))
                            .catch(err => console.log(err));
                    }));
                }
            });
        }
    },

    async logout(req, res) {
        req.logout();

        return res.send(true);
    },

    async profile(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async profileEdit(req, res){
        await User.findOneAndUpdate(req.params.id, req.body, { new: true });
        
        return res.send(true);
    },

    async delete(req, res){
        await User.findByIdAndRemove(req.params.id);

        return res.send()
    }
};
