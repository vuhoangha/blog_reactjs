
/*eslint linebreak-style: ["error", "windows"]*/

'use strict';

import util from '../util';

module.exports = class category {

    //constructor
    constructor(data) {
        //all field
        this.catId = 0;
        this.quantityPost = 0;
        this.catName = '';

        if (!data) return;
        for (const field of this.fields()) {
            if (util.isExistProperty(data, field)) this[field] = data[field];
        }
    }

    //key of entity
    keys() {
        return [
            'catId'
        ];
    }

    //field
    fields() {
        return [
            'catId',
            'quantityPost',
            'catName'
        ];
    }

    //entity name
    getEntityName() {
        return 'category';
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
