const Model = require('./model');

function addUser(user) {
     const myUser =  new Model(user);
     return myUser.save();
}

function getUser(id) {
    const foundMessage = Model.findOne({
        _id: id
    });
    return foundMessage;
}

function getList() {
    return Model.find();
}

module.exports = {
    add: addUser,
    getUserById: getUser,
    getListUsers: getList
}
