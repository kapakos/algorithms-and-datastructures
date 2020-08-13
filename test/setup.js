const expect = require('chai').expect;
const forEach = require('mocha-each');
global.expect = expect;
global.forEach = forEach;
process.env.PORT = 8888;
process.env.NODE_ENV = 'TEST';
