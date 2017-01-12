
/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = {
    //check property has exist in object....obj is object,key is property 
    isExistProperty: (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)
};
