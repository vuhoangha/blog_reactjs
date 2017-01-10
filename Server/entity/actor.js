/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = class actor {
    constructor() {
        this.acId = null;
        this.quantityPost = 0;
        this.acName = '';
    }
    getEntityName() {
        return 'actor';
    }
};
