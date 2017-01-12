
/*eslint linebreak-style: ["error", "windows"]*/

// Create -> Post
// Read   -> Get
// Update -> Put
// Delete -> Delete

'use strict';

var _express = require('../../node_modules/express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('../../node_modules/body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _entity_register = require('../entity/entity_register');

var _entity_register2 = _interopRequireDefault(_entity_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = _entity_register2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entity = _step.value;

        var thisRouter = '/' + entity;

        app.get(thisRouter, function (req, res) {
            res.send('Hello Get Id');
        });

        app.post(thisRouter, function (req, res) {
            res.send('Hello Post');
        });

        app.put(thisRouter, function (req, res) {
            res.send('Hello put');
        });

        app.delete(thisRouter, function (req, res) {
            res.send('Hello delete');
        });
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
//# sourceMappingURL=init.js.map