
const Actor = require('./actor');
const Category = require('./category');
const Post = require('./post');

module.exports = [
    new Actor().getEntityName(),
    new Category().getEntityName(),
    new Post().getEntityName(),
];
