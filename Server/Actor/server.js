
// Create -> Post
// Read   -> Get
// Update -> Put
// Delete -> Delete

const bodyParser = require('body-parser');
const express = require('express');
const query = require('./query');
const app = express();
const morgan = require('morgan');
const config = require('config'); // we load the db location from the JSON files

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

if (config.util.getEnv('NODE_ENV') !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

const callbackGet = (data, res) => {
    res.send(data);
};

const callbackPost = (data, res) => {
    res.send({
        acId: 10,
        quantityPost: 12,
    });
};

app.route('/actor')
    .get((req, res) => {
        const listKey = [];

        if (Reflect.has(req.query, 'key')) {
            const listKeyObject = JSON.parse(req.query.key);

            for (let i = 0; i < listKeyObject.length; i++) {
                listKey.push(JSON.stringify(listKeyObject[i]));
            }
        }
        if (listKey.length > 0) {
            query.selectByMultiKey('actor', listKey, callbackGet, res);
        } else {
            query.selectAll('actor', callbackGet, res);
        }
    })
    .post((req, res) => {
        const key = {
            acId: req.body.acId,
        };
        const value = {
            acId: req.body.acId,
            quantityPost: req.body.quantityPost,
            acName: req.body.acName,
        };

        query.insert('actor', JSON.stringify(key), JSON.stringify(value), callbackPost, res);
    })
    .put((req, res) => {
        res.send('Hello put');
    })
    .delete((req, res) => {
        res.send('Hello delete');
    });


app.listen(3000);

module.exports = app; // for testing
