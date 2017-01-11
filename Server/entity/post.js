

/*eslint linebreak-style: ["error", "windows"]*/

'use strict';
module.exports = class post {
    constructor() {
        this.postTitle_Prop = '';
        this.summary_Prop = '';
        this.content_Prop = '';
        this.quantityView_Prop = 0;
    }

    get postTitle() {
        return this.postTitle_Prop;
    }

    get summary() {
        return this.summary_Prop;
    }

    get content() {
        return this.content_Prop;
    }

    get quantityView() {
        return this.quantityView_Prop;
    }

    set postTitle(value) {
        this.postTitle_Prop = value;
    }

    set summary(value) {
        this.summary_Prop = value;
    }

    set content(value) {
        this.content_Prop = value;
    }

    set quantityView(value) {
        this.quantityView_Prop = value;
    }

    getEntityName() {
        return 'post';
    }
};
