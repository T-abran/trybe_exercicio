const Redux = require('redux');
const { myreducer } = require('../reducers');


const store = Redux.createStore(myreducer);