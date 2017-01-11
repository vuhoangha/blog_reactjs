
/*eslint linebreak-style: ["error", "windows"]*/
/*eslint padded-blocks: ["error", "always"]*/

'use strict';

var _category = require('../entity/category');

var _category2 = _interopRequireDefault(_category);

var _redis = require('../node_modules/redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _redis2.default.createClient('6379', '127.0.0.1');

client.on('connect', function () {

    var vhh = new _category2.default();

    vhh.catId = 10;

    console.log(vhh.catId);

    client.set(vhh.catId, JSON.stringify(vhh));
});
//# sourceMappingURL=main.js.map