

/*eslint linebreak-style: ["error", "windows"]*/

'use strict';
module.exports = class post {
    constructor() {
        this.postTitle = '';
        this.summary = '';
        this.content = '';
        this.quantityView = 0;
    }
    getEntityName() {
        return 'post';
    }
};
