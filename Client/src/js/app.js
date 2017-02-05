const React = require('react');// eslint-disable-line no-unused-vars
const ReactDom = require('react-dom');
const Main = require('./components/main');// eslint-disable-line no-unused-vars

const memory = require('./memory');

memory.initMemory();
ReactDom.render(<Main />, document.getElementById('main'));
