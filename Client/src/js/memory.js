const axios = require('axios');
const dicCategory = {};
const dicActor = {};
const memory = {};

memory.initMemory = callback => {
    let countRes = 0;

    axios.get('http://127.0.0.1:3000/actor')
        .then(res => {
            if (res !== null && res.data !== null) {
                res.data.map(actor => {
                    const actorObj = JSON.parse(actor);

                    dicActor[actorObj.acId] = actorObj;
                });
            }
            countRes++;
            if (countRes === 2) {
                return callback();
            }
        });
    axios.get('http://127.0.0.1:4000/category')
        .then(res => {
            if (res !== null && res.data !== null) {
                res.data.map(category => {
                    const categoryObj = JSON.parse(category);

                    dicCategory[categoryObj.catId] = categoryObj;
                });
            }
            countRes++;
            if (countRes === 2) {
                return callback();
            }
        });
};

memory.getAllCat = () => {
    return Object.values(dicCategory)
        .map(item => JSON.parse(JSON.stringify(item)));
};

memory.getCat = catId => {
    if (Reflect.has(dicCategory, catId)) {
        return JSON.parse(JSON.stringify(dicCategory[catId]));
    }
};

memory.getAllActor = () => {
    return Object.values(dicActor)
        .map(item => JSON.parse(JSON.stringify(item)));
};

memory.getActor = acId => {
    if (Reflect.has(dicActor, acId)) {
        return JSON.parse(JSON.stringify(dicActor[acId]));
    }
};

module.exports = memory;

