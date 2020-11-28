var mongoose = require("mongoose");
const Kids = mongoose.model('Kids');
const Gifts = mongoose.model('Gifts');

const { get_distance, get_time, get_hi, get_y } = require('../services/math-code-capm');

const api_input = (req, res) => {
  if (req.body.kids !== undefined) {
    Kids.insertMany(req.body.kids, (error, _) => {
      if (error) {
        console.log("Save Fail: ");
      } else {
        console.log('Success');
      }
    });
  } else if (req.body.gifts !== undefined) {
    Gifts.insertMany(req.body.gifts, (error, _) => {
      if (error) {
        console.log("Save Fail:");
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

const select_test = (req, res) => {
  // const la = 47.55;
  // const lo = -159.81;
  // const lb = 63;
  // const ls = 36;
  // const condition_interest = { interest: "Doll" };
  // const condition_1 = {
  //   latitude: { $gte: la - lb, $lte: la + lb },
  //   longitude: { $gte: lo + ls, $lte: lo + lb },
  // }
  // const condition_2 = {
  //   latitude: { $gte: la - lb, $lte: la + lb },
  //   longitude: { $gte: lo - lb, $lte: lo - ls },
  // }
  // const condition_3 = {
  //   latitude: { $gte: la - lb, $lte: la - ls },
  //   longitude: { $gte: lo - lb, $lte: lo + lb },
  // }
  // const condition_4 = {
  //   latitude: { $gte: la + ls, $lte: la + lb },
  //   longitude: { $gte: lo - lb, $lte: lo + lb },
  // }

  // // Kids.find({ interest: "Doll", $and: [{ $or: [condition_1, condition_2, condition_3, condition_4] }] }).limit(100).exec((error, docs) => {
  // Kids.find({ interest: "Doll", $and: [{ $or: [condition_1, condition_2, condition_3, condition_4] }] }).limit(100).exec((error, docs) => {
  // Kids.find({ id: "99999999" }).limit(100).exec((error, docs) => {
  //   if (error) {
  //     console.log("Have a error when get list gifts: " + error);
  //     res.json({ data: "Error" });
  //   } else {
  //     res.json({ data: docs });
  //   }
  // });
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
  select_test,
};
