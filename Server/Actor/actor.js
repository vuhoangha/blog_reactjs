

const defaultData = {
    acId: 0,
    quantityPost: 0,
    acName: '',
};

/*
*class 'actor'
*/
module.exports = class actor {

    /**
     * constructor get data is 'actor'.
     * if 'actor' null or undefined , it's setting property value default
     * @param {actor} data is actor
     */
    constructor(data = defaultData) {
        this.acId = data.acId;
        this.quantityPost = data.quantityPost;
        this.acName = data.acName;
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
     * @return {bool} object is valid or unvalid
     */
    validation() {
        if (typeof this.acId !== 'number') {
            return false;
        }
        if (typeof this.quantityPost !== 'number') {
            return false;
        }
        if (typeof this.acName !== 'string') {
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
