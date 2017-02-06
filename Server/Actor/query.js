const redis = require('redis');
const config = require('config'); // we load the db location from the JSON files
const client = redis.createClient(
    config.port, config.host, { password: config.password }
);

let isConnect = false;

client.on('connect', () => {
    isConnect = true;
});

client.on('error', () => {
    isConnect = false;
});

const executeCmd = (command, arg, callback, res) => {
    if (isConnect) {
        client.send_command(command, arg, (err, data) => {
            if (!err) {
                return callback(data, res);
            }
            return callback(null, res);
        });
    } else {
        return callback(null, res);
    }
};

module.exports = {
    selectAll: (entity, callback, res) => {
        executeCmd('hvals', [entity], callback, res);
    },

    selectByKey: (entity, key, callback) => {
        executeCmd('hget', [entity, key], callback);
    },

    selectByMultiKey: (entity, key, callback, res) => {
        executeCmd('hmget', [entity, key], callback, res);
    },

    deleteAll: callback => {
        client.send_command('flushdb', null, err => {
            if (!err) {
                return callback();
            }
        });
    },

    insert: (entity, field, value, callback, res) => {
        executeCmd('hset', [entity, field, value], callback, res);
    },

    delete: (entity, field, callback, res) => {
        executeCmd('hdel', [entity, field], callback, res);
    },

};
