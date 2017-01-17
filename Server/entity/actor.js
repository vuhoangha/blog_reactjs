
const base = require('./base');

const defaultData = {
    acId: 0,
    quantityPost: 0,
    acName: '',
};

/*
*class 'actor'
*/
module.exports = class actor extends base {

    /**
     * constructor get data is 'actor'.
     * if 'actor' null or undefined , it's setting property value default
     * @param {actor} data is actor
     */
    constructor(data = defaultData) {
        super(data);
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

};
