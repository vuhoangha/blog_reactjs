
/*eslint linebreak-style: ["error", "windows"]*/
/*eslint padded-blocks: ["error", "always"]*/

'use strict';

import category from '../entity/category';

import redis from '../node_modules/redis';

const client = redis.createClient('6379', '127.0.0.1');

client.on('connect', () => {

    const vhh = new category();

    vhh.catId = 10;

    console.log(vhh.catId);

    client.set(vhh.catId, JSON.stringify(vhh));

});

