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
  loc: {
    type: [Number]
  }
},
  { timestamps: { createdAt: 'created_at', updatedAt: "updated_at" } }
);

mongoose.model('Gifts', GiftsSchema);
