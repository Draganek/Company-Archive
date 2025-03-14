const User = require('../db/models/user')

module.exports = async function (req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.sendStatus(403).json({ message: "Dostęp zabroniony" })
    }
    const user = await User.findOne({ apiToken: token })
    if (!user) {
        res.sendStatus(403).json({ message: "Dostęp zabroniony" })
    }
    next()
}