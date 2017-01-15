
const exeCmd = require('./exe_cmd');

module.exports = {
    selectAll: (entity, callback) => {
        exeCmd('hvals', [entity], callback);
    },

    selectByKey: (entity, key, callback) => {
        exeCmd('hget', [entity, key], callback);
    },

    selectByMultiKey: (entity, listKey, callback, res) => {
        listKey.unshift(entity);
        exeCmd('hmget', listKey, callback, res);
    },
};
