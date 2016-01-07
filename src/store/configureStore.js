// export hot module on demand
const suffix = process.env.NODE_ENV === 'production' ? '.prod' : '.dev';
export default require('./configureStore' + suffix);
