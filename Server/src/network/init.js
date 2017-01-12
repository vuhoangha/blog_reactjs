
/*eslint linebreak-style: ["error", "windows"]*/

// Create -> Post
// Read   -> Get
// Update -> Put
// Delete -> Delete

'use strict';

import express from '../../node_modules/express';
import bodyParser from '../../node_modules/body-parser';
import listEntityRegister from '../entity/entity_register';
import util from '../util';
import select from '../database/select';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const callbackGet = (data, res) => {
    res.send(data);
};

for (const entity of listEntityRegister) {
    const thisRouter = `/${entity}`;

    app.get(thisRouter, (req, res) => {
        const entityName = req.route.path.split('/')[1];
        const listKey = [];
        if (util.isExistProperty(req.query, 'key')) {
            const listKeyObject = JSON.parse(req.query.key);
            for (let i = 0; i < listKeyObject.length; i++) {
                listKey.push(JSON.stringify(listKeyObject[i]));
            }
        }
        select.selectByMultiKey(entityName, listKey, callbackGet, res);
    });

    app.post(thisRouter, (req, res) => {
        res.send('Hello Post');
    });

    app.put(thisRouter, (req, res) => {
        res.send('Hello put');
    });

    app.delete(thisRouter, (req, res) => {
        res.send('Hello delete');
    });
}


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
