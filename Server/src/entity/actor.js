/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

import util from '../util';

module.exports = class actor {

    //constructor
    constructor(data) {
        //property
        this.acId = 0;
        this.quantityPost = 0;
        this.acName = '';

        if (!data) return;
        for (const field of this.fields()) {
            if (util.isExistProperty(data, field)) this[field] = data[field];
        }
    }

    //all key
    keys() {
        return ['acId'];
    }

    //all field
    fields() {
        return [
            'acId',
            'quantityPost',
            'acName'
        ];
    }

    //entity name
    getEntityName() {
        return 'actor';
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
