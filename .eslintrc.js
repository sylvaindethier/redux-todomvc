module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true, // browser global variables.
    node: true, // Node.js global variables and Node.js scoping.
    // commonjs: true, // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    // worker: false, // web workers global variables.
    // amd: false, // defines require() and define() as global variables as per the amd spec.
    // mocha: false, // adds all of the Mocha testing global variables.
    // jasmine: false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    // jest: false, // Jest global variables.
    // phantomjs: false, // PhantomJS global variables.
    // protractor: false, // Protractor global variables.
    // qunit: false, // QUnit global variables.
    // jquery: false, // jQuery global variables.
    // prototypejs: false, // Prototype.js global variables.
    // shelljs: false, // ShellJS global variables.
    // meteor: false, // Meteor global variables.
    // mongo: false, // MongoDB global variables.
    // applescript: false, // AppleScript global variables.
    // nashorn: false, // Java 8 Nashorn global variables.
    // serviceworker: false, // Service Worker global variables.
    // embertest: false, // Ember test helper globals.
    // webextensions: false, // WebExtensions globals.
    es6: true, // enable all ECMAScript 6 features except for modules.
  },

  'extends': ['eslint:recommended', 'airbnb'],

  ecmaFeatures: {
    arrowFunctions: true,
    // binaryLiterals: false,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: false,
    // forOf: false,
    // generators: false,
    modules: true,
    // objectLiteralComputedProperties: false,
    // objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    // octalLiterals: false,
    // regexUFlag: false,
    // regexYFlag: false,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    // unicodeCodePointEscapes: false,
    // globalReturn: false,
    jsx: true,
    // experimentalObjectRestSpread: false,
  },

  plugins: ['react'],

  rules: {
    'no-console': 0, // allow console statement
  },
};
