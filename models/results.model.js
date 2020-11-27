var mongoose = require("mongoose");

var ResultsSchema = new mongoose.Schema({
  id_kid: {
    type: Number,
    required: 'Field required!'
  },
  id_gift: {
    type: String,
    required: 'Field required!'
  },
  hi: {
    type: Number,
    required: 'Field required!'
  }
},
  { timestamps: { createdAt: 'created_at', updatedAt: "updated_at" } }
);

mongoose.model('Results', ResultsSchema);
