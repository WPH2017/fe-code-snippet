const jsModule = require('./js');
const cssModule = require('./css');
const htmlModule = require('./html');

console.log('Welcome to fe-code-snippet world!');
function init() {
    return {
        jsModule,
        cssModule,
        htmlModule
    }
}

exports = {
    init: init
};