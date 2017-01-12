'use strict';

var _actor = require('./actor');

var _actor2 = _interopRequireDefault(_actor);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = [new _actor2.default().getEntityName(), new _category2.default().getEntityName(), new _post2.default().getEntityName()];
/*eslint linebreak-style: ["error", "windows"]*/
//# sourceMappingURL=entity_register.js.map