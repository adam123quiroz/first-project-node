const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    controller.getChat(id)
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

router.post('/', (req, res) => {
    let users = req.body.users;
    console.log(users);
    controller.addUsers(users)
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

module.exports = router;
