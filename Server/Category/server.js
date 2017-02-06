
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

const callbackInsert = (data, res) => {
    if (data === 1 || data === 0) {
        res.status(200).send('OK');
    } else {
        res.status(404).send('FAIL');
    }
};

const callbackDelete = (data, res) => {
    if (data === 1) {
        res.status(200).send('OK');
    } else {
        res.status(404).send('FAIL');
    }
};

app.route('/category')
    .get((req, res) => {
        if (Reflect.has(req.query, 'key')) {
            query.selectByMultiKey('category', JSON.stringify(JSON.parse(req.query.key)), callbackGet, res);
        } else {
            query.selectAll('category', callbackGet, res);
        }
    })
    .post((req, res) => {
        const key = {
            catId: req.body.catId,
        };
        const value = {
            catId: req.body.catId,
            quantityPost: req.body.quantityPost,
            catName: req.body.catName,
        };

        query.insert('category', JSON.stringify(key), JSON.stringify(value), callbackInsert, res);
    })
    .put((req, res) => {
        const key = req.query.key;
        const value = JSON.stringify(req.body);

        query.insert('category', key, value, callbackInsert, res);
    })
    .delete((req, res) => {
        const key = req.query.key;

        query.delete('category', key, callbackDelete, res);
    });


app.listen(4000);

module.exports = app; // for testing
