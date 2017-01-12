
/*eslint linebreak-style: ["error", "windows"]*/


import actor from './actor';
import category from './category';
import post from './post';

module.exports = [
    new actor().getEntityName(),
    new category().getEntityName(),
    new post().getEntityName()
];
