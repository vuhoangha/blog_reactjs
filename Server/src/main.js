'use strict';

import category from '../entity/category';

let redis = require("redis");
let client = redis.createClient('6379', '127.0.0.1');

client.on('connect', function () {
    console.log('connected');

    let vhh = new category();
    vhh.catId = 1;
    vhh.ahihi = 2;
    vhh.setCatId(2);
    client.set(vhh.catId, JSON.stringify(vhh));

});
