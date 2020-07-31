const store = require("./store");

function addUser(user) {
    return new Promise((resolve, reject) => {
        if (!user.name || !user.surname) {
            reject('Name or Surname invalid');
        }
        const newUser = {
            name: user.name,
            surname: user.surname
        };
        resolve(store.add(newUser));
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Data Invalid');
            return false;
        }
        const result = store.getUserById(id);
        resolve(result);
    });
}

function getListUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.getListUsers());
    });
}

module.exports = {
    addUser,
    getUserById,
    getListUsers
}
