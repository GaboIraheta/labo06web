class User {
    constructor(name, lastname, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email; 
    };
}

const users = [];

const save = (newUser) => {
    users.push(newUser);
    return users;
}

const recovery = () => { //metodo para obtener los usuarios del modelo
    return users;
}

module.exports = {
    User,
    save,
    recovery
};