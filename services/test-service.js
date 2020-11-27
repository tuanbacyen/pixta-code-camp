// const calcCrow = (lat1, lon1, lat2, lon2) => {
//   // 6378 đề cho
//   var R = 6367;
//   var dLat = degrees_to_radians(lat2 - lat1);
//   var dLon = degrees_to_radians(lon2 - lon1);
//   var lat1 = degrees_to_radians(lat1);
//   var lat2 = degrees_to_radians(lat2);

//   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   var d = R * c;
//   return d;
// }
