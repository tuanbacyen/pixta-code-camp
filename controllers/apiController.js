var mongoose = require("mongoose");
const Kids = mongoose.model('Kids');
const Gifts = mongoose.model('Gifts');

const api_input = (req, res) => {
  if (req.body.kids !== undefined) {
    Kids.insertMany(req.body.kids, (error, _) => {
      if (error) {
        console.log("not save: " + req.body.kids.toString());
      }
    });
  } else if (req.body.gifts !== undefined) {
    Gifts.insertMany(req.body.gifts, (error, _) => {
      if (error) {
        console.log("not save: " + req.body.gifts.toString());
      }
    });
  }
  res.json({ result: "ok" });
}

const api_list_kids = (req, res) => {
  Kids.find({}, (error, docs) => {
    if (error) {
      console.log("Have a error when get list kids: " + error);
    }
    res.json({ result: docs });
  });
};

const api_list_gifts = (req, res) => {
  Gifts.find({}, (error, docs) => {
    if (error) {
      console.log("Have a error when get list gifts: " + error);
    }
    res.json({ result: docs });
  });
};

module.exports = {
  api_input,
  api_list_kids,
  api_list_gifts,
};
