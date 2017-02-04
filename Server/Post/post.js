
const DefValue = require('../extra/default');
const defaultData = {
    postId: 0,
    postTitle: '',
    catId: 0,
    acId: 0,
    summary: '',
    content: '',
    quantityView: 0,
};

/*
*class 'post'
*/
module.exports = class post {

    /**
     * constructor get data is 'post'.
     * if 'post' null or undefined , it's setting property value default
     * @param {post} data is post
     */
    constructor(data = defaultData) {
        this.postId = data.postId;
        this.postTitle = data.postTitle;
        this.catId = data.catId;
        this.acId = data.acId;
        this.summary = data.summary;
        this.content = data.content;
        this.quantityView = data.quantityView;
    }

    /**
     * get all key of entity
     * @return {list} all key of class
     */
    keys() {
        return ['postId'];
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
        return 'category';
    }

    /**
     * @return {bool} object is valid or unvalid
     */
    validation() {
        if (typeof this.postId !== DefValue.typeString.num) {
            return false;
        }
        if (typeof this.postTitle !== DefValue.typeString.str) {
            return false;
        }
        if (typeof this.catId !== DefValue.typeString.num) {
            return false;
        }
        if (typeof this.acId !== DefValue.typeString.num) {
            return false;
        }
        if (typeof this.summary !== DefValue.typeString.str) {
            return false;
        }
        if (typeof this.content !== DefValue.typeString.str) {
            return false;
        }
        if (typeof this.quantityView !== DefValue.typeString.num) {
            return false;
        }
        return true;
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

