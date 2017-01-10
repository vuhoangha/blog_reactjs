'use strict';

module.exports = class actor {

    constructor() {
        this.quantityPost = 0,
            this.acName = '';
    }

    constructor(acId, acName, quantityPost) {
        this.acId = acId,
            this.acName = acName,
            this.quantityPost = quantityPost
    }
}