'use strict';

module.exports = class category {

    constructor() {
        this.quantityPost = 0,
            this.catName = '';
    }

    constructor(catId, catName, quantityPost) {
        this.catId = catId,
            this.catName = catName,
            this.quantityPost = quantityPost
    }
}