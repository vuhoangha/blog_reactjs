const axios = require('axios');
const dicCategory = {};
const dicActor = {};

const initMemory = () => {
    axios.get('http://127.0.0.1:3000/actor')
        .then(res => {
            if (res !== null && res.data !== null) {
                res.data.map(actor => {
                    const actorObj = JSON.parse(actor);

                    dicActor[actorObj.acId] = actorObj;
                });
                console.log(dicActor);
            }
        });
    axios.get('http://127.0.0.1:4000/category')
        .then(res => {
            res.data.map(category => {
                const categoryObj = JSON.parse(category);

                dicCategory[categoryObj.catId] = categoryObj;
            });
            console.log(dicCategory);
        });
};

module.exports = initMemory;

