const store = require('../user/store');
const auth = require('../../auth/index');
const bcrypt = require('bcrypt');

async function login(email, password){
    const data = await store.login(email);
    return bcrypt.compare(password, data.password)
    .then(iguales => {
        if (iguales){
            return auth.sign(data);
        }else{
            throw new Error('Tu informacion es erronea');
        }
    });
}
module.exports = {
    login
}