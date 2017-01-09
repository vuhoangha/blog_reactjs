'use strict';

var _category = require('../entity/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redis = require("redis");
var client = redis.createClient('6379', '127.0.0.1');

client.on('connect', function () {
    console.log('connected');

    var vhh = new _category2.default();
    vhh.catId = 1;
    vhh.ahihi = 2;
    vhh.setCatId(2);
    client.set(vhh.catId, JSON.stringify(vhh));
});
//# sourceMappingURL=main.js.map