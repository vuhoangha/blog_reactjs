
/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = class category {
    constructor() {
        this.catId = null;
        this.quantityPost = 0;
        this.catName = '';
    }
    getEntityName() {
        return 'category';
    }
};
