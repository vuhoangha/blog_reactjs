
// Create -> Post
// Read   -> Get
// Update -> Put
// Delete -> Delete

const bodyParser = require('body-parser');
const express = require('express');
const select = require('../database/select');
const util = require('../util');
const entityName = 'actor';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const callbackGet = (data, res) => {
    res.send(data);
};

app.get(entityName, (req, res) => {
    const listKey = [];

    if (util.isExistProperty(req.query, 'key')) {
        const listKeyObject = JSON.parse(req.query.key);

        for (let i = 0; i < listKeyObject.length; i++) {
            listKey.push(JSON.stringify(listKeyObject[i]));
        }
    }
    if (listKey.length > 0) {
        select.selectByMultiKey(entityName, listKey, callbackGet, res);
    } else {
        select.selectAll(entityName, callbackGet, res);
    }
});

app.post(entityName, (req, res) => {
    res.send('Hello Post');
});

app.put(entityName, (req, res) => {
    res.send('Hello put');
});

app.delete(entityName, (req, res) => {
    res.send('Hello delete');
});


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
