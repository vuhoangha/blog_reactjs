'use strict';

module.exports = class category {
    constructor(catId, catName, quantityPost) {
        this.catId = catId,
            this.catName = catName,
            this.quantityPost = quantityPost
    }

    setCatId(catId) {
        this.catId = catId
    }

}