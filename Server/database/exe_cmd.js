
const redis = require('redis');

const client = redis.createClient('11039', 'redis-11039.c10.us-east-1-4.ec2.cloud.redislabs.com', { password: '123' });

let isConnect = false;

client.on('connect', () => {
    isConnect = true;
});

client.on('error', () => {
    isConnect = false;
});

module.exports = (command, arg, callback, res) => {
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
