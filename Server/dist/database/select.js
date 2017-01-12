'use strict';

var _exe_cmd = require('./exe_cmd');

var _exe_cmd2 = _interopRequireDefault(_exe_cmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

    selectAll: function selectAll(entity, callback) {
        (0, _exe_cmd2.default)('hvals', [entity], callback);
    },

    selectByKey: function selectByKey(entity, key, callback) {
        (0, _exe_cmd2.default)('hget', [entity, key], callback);
    },

    selectByMultiKey: function selectByMultiKey(entity, listKey, callback, res) {
        listKey.unshift(entity);
        (0, _exe_cmd2.default)('hmget', listKey, callback, res);
    }

};
/*eslint linebreak-style: ["error", "windows"]*/
//# sourceMappingURL=select.js.map