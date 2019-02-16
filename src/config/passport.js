const mongoose = require('mongoose');

const User = mongoose.model('User');

const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');

module.exports = passport => {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            User.findOne({ email }).then(user => {
                if(!user){
                    return done(null, false, { message: 'Usuário não registrado' });
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch) {
                        return done(null, user);

                    } else {
                        return done(null, false, { message: 'Senha incorreta' });
                    }
                });
            })
            .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}