var mongoose = require("mongoose");

var KidsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: 'Field required!'
  },
  gender: {
    type: String,
    required: 'Field required!'
  },
  age: {
    type: Number,
    required: 'Field required!'
  },
  interest: {
    type: String,
    required: 'Field required!'
  },
  like_color: {
    type: String,
    required: 'Field required!'
  },
  dislike_color: {
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
  gift_id: {
    type: Number,
  }
}
);

mongoose.model('Kids', KidsSchema);
