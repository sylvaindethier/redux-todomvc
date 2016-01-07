// export hot module on demand
export default require('./initialize' + (module.hot ? '-hot' : ''));
