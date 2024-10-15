const {User, save, recovery} = require('../models/user.model');

const addNewUser = (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const recoveryAllUsers = () => { //metodo para invocar la funcion del modelo que recupera los usuarios
    return recovery();
}

module.exports = {
    addNewUser,
    recoveryAllUsers
}