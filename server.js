const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routers');

const uri = 'mongodb+srv://db-user-node:Arqui2020@cluster0.ldkl9.mongodb.net/node-db?retryWrites=true&w=majority'
db(uri);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));
server.listen(3000, () => {
    console.log('http://localhost:3000')
});

