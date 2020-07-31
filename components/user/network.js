const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    const filterUserId = req.query.id || null;
    console.log(filterUserId);
    controller.getUserById(filterUserId)
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

router.post('/', (req, res) => {
    let user = req.body;
    controller.addUser(user)
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

router.get('/all', (req, res) => {
    controller.getListUsers()
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

module.exports = router;
