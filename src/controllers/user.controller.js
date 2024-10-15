const {addNewUser, recoveryAllUsers} = require('../services/user.service');

const addUserController = (req, res) => {
    try {
        const {name, lastname, email} = req.body;
        const user = addNewUser(name, lastname, email);
        res.render('home.pug', {user});
    } catch(e) {
        console.log(e);
        res.status(500).send('Internal server error');
    }
}

const showForm = (req, res) => {
    res.render('form.pug');
}

const allUsers = (req, res) => { //metodo que gestiona la vista que muestra todos los usuarios obtenidos haciendo uso del servicio
    try {
        const users = recoveryAllUsers();
        res.render('allUsers.pug', {users})
    } catch(e) {
        console.log(e);
        res.status(500).send('Internal server error');
    }
}

module.exports = {
    addUserController,
    showForm,
    allUsers
}