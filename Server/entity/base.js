
/*
*class 'base'
*/
module.exports = class base {


    /**
     * get all key of entity
     * @return {list} all key of class
     */
    keys() {
        return [];
    }

    /**
     * @return {list} all fields
     */
    fields() {
        return [];
    }

    /**
     * @return {String} entity name
     */
    getEntityName() {
        return 'base';
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
