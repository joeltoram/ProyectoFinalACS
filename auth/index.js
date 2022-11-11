const jwt = require('jsonwebtoken');
require('dotenv').config();

function sign(user) {
    return jwt.sign({user},process.env.SECRET, {expiresIn: '60m'}, {algorithm:'RS256'},);
}

module.exports = {
    sign
}