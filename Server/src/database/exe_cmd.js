/*eslint linebreak-style: ["error", "windows"]*/
/*eslint padded-blocks: ["error", "always"]*/

'use strict';

import redis from '../../node_modules/redis';

const client = redis.createClient('6379', '127.0.0.1');

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

            callback(data, res);
            
        });

    } else {

        callback(null);

    }

};
