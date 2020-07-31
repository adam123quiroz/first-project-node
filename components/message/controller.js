const store = require('./store');
const {socket} = require("../../socket");

function addMessage(user, message, chat, file) {
    return new Promise((resolve, reject) => {
        if (!user || !message || !chat) {
            console.error('[messageController] there is not message or user');
            reject('data are incomplete');
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const messageComplete = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
        store.add(messageComplete);
        socket.io.emit('message', messageComplete);
        resolve(messageComplete);
    });
}

function getMessage(filterUser) {
    return new Promise((resolve) => {
        resolve(store.list(filterUser));
    })
}

async function updateMessage(id, text) {
    return new Promise((resolve, reject) => {
        if (!id || !text) {
            reject('invalid data');
        }
        const result = store.updateText(id, text);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Data');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(reason => {
                reject(reason);
            })

    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}
