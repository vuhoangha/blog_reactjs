

/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {

    //constructor
    function post(data) {
        _classCallCheck(this, post);

        //property
        this.postId = 0;
        this.postTitle = '';
        this.catId = 0;
        this.acId = 0;
        this.summary = '';
        this.content = '';
        this.quantityView = 0;

        if (!data) return;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.fields()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var field = _step.value;

                if (_util2.default.isExistProperty(data, field)) this[field] = data[field];
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
    }

    //key of entity


    _createClass(post, [{
        key: 'keys',
        value: function keys() {
            return ['acId'];
        }

        //field

    }, {
        key: 'fields',
        value: function fields() {
            return ['postId', 'postTitle', 'catId', 'acId', 'summary', 'content', 'quantityView'];
        }

        //entity name

    }, {
        key: 'getEntityName',
        value: function getEntityName() {
            return 'actor';
        }

        //custom function

    }, {
        key: 'getKey',
        value: function getKey() {
            var keyObject = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    keyObject[key] = this[key];
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return keyObject;
        }
    }]);

    return post;
}();
//# sourceMappingURL=post.js.map