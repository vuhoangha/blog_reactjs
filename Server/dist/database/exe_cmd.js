/*eslint linebreak-style: ["error", "windows"]*/
/*eslint padded-blocks: ["error", "always"]*/

'use strict';

var _redis = require('../../node_modules/redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _redis2.default.createClient('6379', '127.0.0.1');

var isConnect = false;

client.on('connect', function () {

    isConnect = true;
});

client.on('error', function () {

    isConnect = false;
});

module.exports = function (command, arg, callback, res) {

    if (isConnect) {

        client.send_command(command, arg, function (err, data) {

            callback(data, res);
        });
    } else {

        callback(null);
    }
};
//# sourceMappingURL=exe_cmd.js.map