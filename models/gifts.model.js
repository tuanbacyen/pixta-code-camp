var mongoose = require("mongoose");

var GiftsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: 'Field required!'
  },
  type: {
    type: String,
    required: 'Field required!'
  },
  ages: {
    type: String,
    required: 'Field required!'
  },
  min_age: {
    type: Number
  },
  max_age: {
    type: Number
  },
  color: {
    type: String,
    required: 'Field required!'
  },
  latitude: {
    type: Number,
    required: 'Field required!'
  },
  longitude: {
    type: Number,
    required: 'Field required!'
  },
  user_id: {
    type: Number,
  }
});

mongoose.model('Gifts', GiftsSchema);
