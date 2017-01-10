
'use strict';

module.exports = class post {
    constructor() {
        this.postTitle = '',
            this.summary = '',
            this.content = '',
            this.quantityView = 0
    }

    constructor(postId, postTitle, catId, acId, summary, content, quantityView) {
        this.postId = postId,
            this.postTitle = postTitle,
            this.catId = catId,
            this.acId = acId,
            this.summary = summary,
            this.content = content,
            this.quantityView = quantityView
    }

};