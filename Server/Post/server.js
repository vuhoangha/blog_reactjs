
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

app.route('/post')
    .get((req, res) => {
        if (Reflect.has(req.query, 'key')) {
            query.selectByMultiKey('post', JSON.stringify(JSON.parse(req.query.key)), callbackGet, res);
        } else {
            query.selectAll('post', callbackGet, res);
        }
    })
    .post((req, res) => {
        const key = {
            postId: req.body.postId,
        };
        const value = {
            postId: req.body.postId,
            postTitle: req.body.postTitle,
            catId: req.body.catId,
            acId: req.body.acId,
            summary: req.body.summary,
            content: req.body.content,
            quantityView: req.body.quantityView,
        };

        query.insert('post', JSON.stringify(key), JSON.stringify(value), callbackInsert, res);
    })
    .put((req, res) => {
        const key = req.query.key;
        const value = JSON.stringify(req.body);

        query.insert('post', key, value, callbackInsert, res);
    })
    .delete((req, res) => {
        const key = req.query.key;

        query.delete('post', key, callbackDelete, res);
    });


app.listen(5000);

module.exports = app; // for testing
