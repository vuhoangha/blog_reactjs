

/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

import util from '../util';

module.exports = class post {

    //constructor
    constructor(data) {
        //property
        this.postId = 0;
        this.postTitle = '';
        this.catId = 0;
        this.acId = 0;
        this.summary = '';
        this.content = '';
        this.quantityView = 0;

        if (!data) return;
        for (const field of this.fields()) {
            if (util.isExistProperty(data, field)) this[field] = data[field];
        }
    }

    //key of entity
    keys() {
        return [
            'acId'
        ];
    }

    //field
    fields() {
        return [
            'postId',
            'postTitle',
            'catId',
            'acId',
            'summary',
            'content',
            'quantityView'
        ];
    }

    //entity name
    getEntityName() {
        return 'post';
    }

    //custom function
    getKey() {
        const keyObject = {};
        for (const key of this.keys()) {
            keyObject[key] = this[key];
        }
        return keyObject;
    }

};
