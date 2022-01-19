const {KEYS,SERVER_MSG} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(key) {
  if (key === KEYS.EXIT) {
    process.exit();
  }

  if (key.toUpperCase() === KEYS.MOVE_UP) {
    connection.write(SERVER_MSG.MOVE_UP);
  }

  if (key.toUpperCase() === KEYS.MOVE_DOWN) {
    connection.write(SERVER_MSG.MOVE_DOWN);
  }

  if (key.toUpperCase() === KEYS.MOVE_LEFT) {
    connection.write(SERVER_MSG.MOVE_LEFT);
  }

  if (key.toUpperCase() === KEYS.MOVE_RIGHT) {
    connection.write(SERVER_MSG.MOVE_RIGHT);
  }

  if (key.toUpperCase() === KEYS.SAY_MSG) {
    connection.write(SERVER_MSG.SAY_MSG);
  }
};

module.exports = {
  setupInput
};