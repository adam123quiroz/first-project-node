const db = require('mongoose');

db.Promise = global.Promise;

//using mongodb module
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://db-user-node:<password>@cluster0.ldkl9.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close().then(r => {

    });
}).then(r => {

});*/

function connection(uri) {
    db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(value => {
        console.log(value.toString() + ' db connected');
    }).catch(reason => {
        console.error(reason);
    });

}

module.exports = connection;

