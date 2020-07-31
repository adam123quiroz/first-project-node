const store = require('./store');

function addUsers(users) {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            console.error('[chatController] there are not users');
            reject('data invalid');
            return false;
        }
        const newChat = {
            users: users
        }
        resolve(store.add(newChat));
    });
}

function getChat(id) {
    return new Promise((resolve) => {
        resolve(store.list(id));
    })
}

module.exports = {
    addUsers,
    getChat,
}
