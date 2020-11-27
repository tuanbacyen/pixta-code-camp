
var mongoose = require("mongoose");
// var URL_MONGO_LOCALE = "mongodb://admin:123456@127.0.0.1:27017/code-camp?authSource=admin";
var URL_MONGO_LOCALE = "mongodb://localhost:27017/code-camp";

mongoose.connect(process.env.MONGODB_URI || URL_MONGO_LOCALE, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (!error) {
    console.log('Mongodb connection successes');
  } else {
    console.log('fails', error.message);
  }
});

mongoose.set('useFindAndModify', false);

require('./kids.model');
require('./gifts.model')
