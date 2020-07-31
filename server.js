const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const config = require('./config');

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routers');

db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static('public'));
server.listen(3000, () => {
    console.log(config.host + ':' + config.port)
});

