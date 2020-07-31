const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routers');

const uri = 'mongodb+srv://db-user-node:Arqui2020@cluster0.ldkl9.mongodb.net/node-db?retryWrites=true&w=majority'
db(uri);
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));
app.listen(3000);

