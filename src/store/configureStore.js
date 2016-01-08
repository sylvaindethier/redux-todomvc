// export configureStore
const suffix = process.env.NODE_ENV === 'production' ? '.prod' : '.dev';
module.exports = require('./configureStore' + suffix);
export default module.exports;
