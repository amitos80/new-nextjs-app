const { OK } = require('http-status-codes');

const index = (_, res) => res.status(OK).json({ message: 'Welcome' });

module.exports = {
  index,
};
