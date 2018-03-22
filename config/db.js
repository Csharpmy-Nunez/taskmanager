const mongoose = require('mongoose');
const keys = require('./keys');

//Map global promises
mongoose.Promise = global.Promise;

//Connect to mongo
mongoose.connect(keys.mongoURI).then( () => console.log('MongoDB Connected') ).catch( err => console.log(err));
