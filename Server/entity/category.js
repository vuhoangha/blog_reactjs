
const util = require('../util');

/**
 * @class category post
 */

module.exports = class category {

    /**
     * @param {Object} data is class category
     */
    constructor(data) {
        this.catId = 0;
        this.quantityPost = 0;
        this.catName = '';

        if (!data) return;
        for (const field of this.fields()) {
            if (util.isExistProperty(data, field)) this[field] = data[field];
        }
    }

    /**
     * get all key of entity
     * @return {list} all key of class
     */
    keys() {
        return [
            'catId',
        ];
    }

    /**
     * @return {list} all fields
     */
    fields() {
        return [
            'catId',
            'quantityPost',
            'catName',
        ];
    }

    /**
     * @return {String} entity name
     */
    getEntityName() {
        return 'category';
    }

    /**
     * @return {Object} key type object
     */
    getKey() {
        const keyObject = {};

        for (const key of this.keys()) {
            keyObject[key] = this[key];
        }
        return keyObject;
    }

};
