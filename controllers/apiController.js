var mongoose = require("mongoose");
const Kids = mongoose.model('Kids');
const Gifts = mongoose.model('Gifts');

const { get_distance, get_time, get_hi, get_y } = require('../services/math-code-capm');

const api_input = (req, res) => {
  if (req.body.kids !== undefined) {
    Kids.insertMany(new_data(req.body.kids), (error, _) => {
      if (error) {
        console.log("Save Fail: " + req.body.kids.map((i) => i.id));
      } else {
        console.log('Success');
      }
    });
  } else if (req.body.gifts !== undefined) {
    Gifts.insertMany(new_data(req.body.gifts), (error, _) => {
      if (error) {
        console.log("Save Fail: " + req.body.gifts.map((i) => i.id));
      } else {
        console.log('Success');
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

const test = (req, res) => {
  const condition = { loc: { $geoWithin: { $centerSphere: [[-159.81, 47.55], 10 / 3963.2] } } };
  Kids.find(condition).exec((error, docs) => {
    res.json({ data: docs });
  })
};

function new_data(data_origin) {
  return data_origin.map((x) => {
    var o = Object.assign({}, x);
    o.loc = [x.longitude, x.latitude];
    if (x.ages !== undefined) {
      const ages = x.ages.split('-');
      o.min_age = parseInt(ages[0]);
      o.max_age = parseInt(ages[1]);
    }
    return o;
  });
}

module.exports = {
  api_input,
  api_list_kids,
  api_list_gifts,
  test,
};
