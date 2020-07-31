const express = require('express');
const router = express.Router();
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({
    dest: 'public/files/'
})


router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessage(filterMessages)
        .then(value => response.success(req, res, value, 200))
        .catch(reason => response.error(req, res, reason, 500));
});

router.post('/',upload.single('file') , (req, res) => {
    let body = req.body;
    controller.addMessage(body.user, body.message, body.chat, req.file)
        .then(value => response.success(req, res, value, 201))
        .catch(reason => response.error(req, res, reason, 400));
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    controller.deleteMessage(id)
        .then(() => response.success(req, res, 'Message Deleted', 200))
        .catch(reason => response.error(req, res, reason, 500));
});

router.patch('/:id', (req, res) => {
    let idMessage = req.params.id, text = req.body.text;
   controller.updateMessage(idMessage, text)
       .then(value => response.success(req, res, value, 200))
       .catch(reason => response.error(req, res, reason, 500));
});

module.exports = router;
