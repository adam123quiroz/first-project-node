const Model = require('./model');

function addUsers(users) {
    const usersModel = new Model(users);
    usersModel.save();
}

async function getChat(id) {
    return new Promise((resolve, reject) => {
        if (id !== null) {
            Model.findOne({_id: id})
                .populate('users')
                .exec((err, populated) => {
                    if (err) {
                        reject(err);
                        return false;
                    }
                    resolve(populated);
                });
        }
    });
}

module.exports = {
    add: addUsers,
    list: getChat
}

