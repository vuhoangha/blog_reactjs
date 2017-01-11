
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

    set catId(value) {
        this.catId_Prop = value;
    }

    get quantityPost() {
        return this.quantityPost_Prop;
    }

    set quantityPost(value) {
        this.quantityPost_Prop = value;
    }

    get catName() {
        return this.catId_Prop;
    }

    set catName(value) {
        this.catName_Prop = value;
    }

    getEntityName() {
        return 'category';
    }
};
