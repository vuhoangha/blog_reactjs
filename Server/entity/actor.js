/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

module.exports = class actor {
    constructor() {
        this.acId_Prop = null;
        this.quantityPost_Prop = 0;
        this.acName_Prop = '';
    }

    get acId() {
        return this.acId_PropacId;
    }

    get quantityPost() {
        return this.quantityPost_Prop;
    }

    get acName() {
        return this.acName_Prop;
    }

    set acId(value) {
        this.acId_Prop = value;
    }

    set quantityPost(value) {
        this.quantityPost_Prop = value;
    }

    set acName(value) {
        this.acName_Prop = value;
    }

    getEntityName() {
        return 'actor';
    }
};
