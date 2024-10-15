const {addUserController, showForm, allUsers} = require('../controllers/user.controller');

const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', allUsers); //Configuracion de la ruta de allUsers

module.exports = router;