
const DefValue = require('../extra/default');
const defaultData = {
    catId: 0,
    quantityPost: 0,
    catName: '',
};

/*
*class 'category'
*/
module.exports = class category {

    /**
     * constructor get data is 'category'.
     * if 'category' null or undefined , it's setting property value default
     * @param {category} data is category
     */
    constructor(data = defaultData) {
        this.catId = data.catId;
        this.quantityPost = data.quantityPost;
        this.catName = data.catName;
    }

    /**
     * get all key of entity
     * @return {list} all key of class
     */
    keys() {
        return ['catId'];
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
     * @return {bool} object is valid or unvalid
     */
    validation() {
        if (typeof this.catId !== DefValue.typeString.num) {
            return false;
        }
        if (typeof this.quantityPost !== DefValue.typeString.num) {
            return false;
        }
        if (typeof this.catName !== DefValue.typeString.str) {
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

