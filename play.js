const connect = require('./client').connect;
const setupInput = require('./input').setupInput;

console.log('Connecting ...');
const conn = connect();

setupInput(conn);