const Model = require('./model');

function addMessage(message) {
    const myModel = new Model(message);
    myModel.save();
}

async function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = {
                user: filterUser,
            }
        }
        Model.find(filter)
            .populate('user')
            .populate({
                path: 'chat',
                populate: { path: 'users' }
            })
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(populated);
            });
    });
}

async function updateText(id, text) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = text;
    return await foundMessage.save();
}

async function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}

