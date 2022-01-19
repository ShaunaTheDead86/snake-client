const IP = 'localhost';
const PORT = '50541';
const NAME = 'SHA';
const KEYS = {
  MOVE_UP: 'W',
  MOVE_DOWN: 'S',
  MOVE_LEFT: 'A',
  MOVE_RIGHT: 'D',
  SAY_MSG: 'M',
  EXIT: '\u0003'
};
const MESSAGE = 'OH HI MARK';
const SERVER_MSG = {
  MOVE_UP: 'Move: up',
  MOVE_DOWN: 'Move: down',
  MOVE_LEFT: 'Move: left',
  MOVE_RIGHT: 'Move: right',
  SAY_MSG: `Say: ${MESSAGE}`
};

module.exports = {
  IP,
  PORT,
  NAME,
  KEYS,
  MESSAGE,
  SERVER_MSG
};