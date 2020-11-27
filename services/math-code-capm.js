const get_distance = (lai1, loi1, lai2, loi2) => {
  lai1 = degrees_to_radians(lai1);
  loi1 = degrees_to_radians(loi1);
  lai2 = degrees_to_radians(lai2);
  loi2 = degrees_to_radians(loi2);

  const diff_long = loi2 - loi1;
  const diff_lat = lai2 - lai1;
  const R = 6367;

  const val = Math.pow(Math.sin(diff_lat / 2), 2) + Math.cos(lai1) * Math.cos(lai2) * Math.pow(Math.sin(diff_long / 2), 2);
  const distance = R * (2 * Math.asin(Math.sqrt(val)));
  return distance;
}

const get_time = (distance) => {
  const S = 1000; //  km/h
  return distance / S;
}

const get_y = (x) => {
  return 90 * Math.sin(x / 2 - 1) / (Math.pow((x / 2 - 3), 2) + 1) + 15
}

const get_hi = (genderType, age, time, color, interestType) => {
  return Math.round((genderType + age + time / 4) * color * interestType);
}

function degrees_to_radians(degrees) {
  return degrees * (Math.PI / 180);
}

module.exports = {
  get_distance,
  get_time,
  get_hi,
  get_y,
};
