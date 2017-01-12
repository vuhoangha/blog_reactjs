
/*eslint linebreak-style: ["error", "windows"]*/

// Create -> Post
// Read   -> Get
// Update -> Put
// Delete -> Delete

'use strict';

import express from '../../node_modules/express';
import bodyParser from '../../node_modules/body-parser';
import listEntityRegister from '../entity/entity_register';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

for (const entity of listEntityRegister) {
    const thisRouter = `/${entity}`;

    app.get(thisRouter, (req, res) => {
        res.send('Hello Get Id');
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
