
const util = require('../util');

/*
*class 'actor'
*/

module.exports = class actor {

    /**
     * constructor get data is 'actor'.
     * if 'actor' null or undefined , it's setting property value default
     * @param {actor} data is actor
     */
    constructor(data) {
        this.acId = 0;
        this.quantityPost = 0;
        this.acName = '';

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
        return ['acId'];
    }

    /**
     * @return {list} all fields
     */
    fields() {
        return [
            'acId',
            'quantityPost',
            'acName',
        ];
    }

    /**
     * @return {String} entity name
     */
    getEntityName() {
        return 'actor';
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
