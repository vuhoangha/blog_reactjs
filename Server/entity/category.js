
/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = class category {
    constructor() {
        this.catId_Prop = null;
        this.quantityPost_Prop = 0;
        this.catName_Prop = '';
    }

    get catId() {
        return this.catId_Prop;
    }

    set catId(catId) {
        this.catId_Prop = catId;
    }

    getEntityName() {
        return 'category';
    }
};
