
const util = require('../util');

module.exports = class post {

    /**
     * @param {Object} data is class post
     */
    constructor(data) {
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

    /**
     * get all key of entity
     * @return {list} all key of class
     */
    keys() {
        return [
            'acId',
        ];
    }

    /**
     * @return {list} all fields
     */
    fields() {
        return [
            'postId',
            'postTitle',
            'catId',
            'acId',
            'summary',
            'content',
            'quantityView',
        ];
    }

    /**
     * @return {String} entity name
     */
    getEntityName() {
        return 'post';
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
