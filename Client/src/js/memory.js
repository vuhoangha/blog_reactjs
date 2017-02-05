const axios = require('axios');
const dicCategory = {};
const dicActor = {};
const memory = {};

memory.initMemory = () => {
    axios.get('http://127.0.0.1:3000/actor')
        .then(res => {
            if (res !== null && res.data !== null) {
                res.data.map(actor => {
                    const actorObj = JSON.parse(actor);

                    dicActor[actorObj.acId] = actorObj;
                });
            }
        });
    axios.get('http://127.0.0.1:4000/category')
        .then(res => {
            res.data.map(category => {
                const categoryObj = JSON.parse(category);

                dicCategory[categoryObj.catId] = categoryObj;
            });
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

module.exports = memory;

