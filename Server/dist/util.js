
/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = {
    //check property has exist in object....obj is object,key is property 
    isExistProperty: function isExistProperty(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }
};
//# sourceMappingURL=util.js.map