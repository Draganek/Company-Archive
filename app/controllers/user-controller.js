const User = require('../db/models/user');

class UserController {

    showRegister(req, res) {
        res.render('pages/auth/register')
    }

    async register(req, res) {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        try {
            await user.save();
            res.redirect('/zaloguj')
        } catch (e) {
            res.render('pages/auth/register', {
                errors: e.errors,
                form: req.body
            })
        }
    }

    showLogin(req, res) {
        res.render('pages/auth/login')
    }

    async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error("user not found")
            }
            const isValidPassword = user.comparePassword(req.body.password);
            if (!isValidPassword) {
                throw new Error("Incorrect password")
            }

        } catch (e) {
            res.render('pages/auth/login', {
                form: req.body,
                errors: true
            });
        }
    }
}

module.exports = new UserController();