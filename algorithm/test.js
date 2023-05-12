// const R = 6378.1; // Yeah, yeah, I know, the radius of the Earth in kilometers
// const d = 0.1 / R; // Convert 100 meters to radians, duh
// const lat1 = 35.241063 * Math.PI/180; // Latitude of A in radians
// const lng1 = 128.631550 * Math.PI/180; // Longitude of A in radians

// const azimuthAngle = 45; // Whatever azimuth angle you have, it doesn't matter
// const bearingAngle = azimuthAngle; // Convert azimuth angle to bearing angle, ta-da!

// const lat2 = Math.asin(Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(bearingAngle * Math.PI/180));
// const lng2 = lng1 + Math.atan2(Math.sin(bearingAngle * Math.PI/180) * Math.sin(d) * Math.cos(lat1), Math.cos(d) - Math.sin(lat1) * Math.sin(lat2)); // Replace 0 with bearingAngle in this calculation

// const newLat = lat2 * 180 / Math.PI; // Convert latitude back to degrees
// const newLng = lng2 * 180 / Math.PI; // Convert longitude back to degrees

// console.log(newLat, newLng); // There you go, your new coordinates with the fancy azimuth angle included!

function calPoint (lat1, lng1, lat2, lng2, rssi){
  function calculateDistance(rssi) {
    var txPower = +59;
    var n = 2;
    var distance = Math.pow(10, (txPower - rssi) / (10 * n));
    return distance.toFixed(2);
  }
  console.log(calculateDistance(rssi))
const R = 6378.1;
const d = (calculateDistance(rssi)/1000) / R;
const calLat = lat1 * Math.PI/180;
const calLng = lng1 * Math.PI/180;

const bearing = getAzimuth(lat1, lng1, lat2, lng2)
function getAzimuth(lat1, lon1, lat2, lon2) {
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;

  const y = Math.sin(dLon) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
            Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);

  let azimuth = Math.atan2(y, x) * 180 / Math.PI;
  if (azimuth < 0) azimuth += 360;

  return azimuth;
}
console.log(bearing)
let newLat = Math.asin(Math.sin(calLat) * Math.cos(d) + Math.cos(calLat) * Math.sin(d) * Math.cos(bearing * Math.PI/180));
let newLng = calLng + Math.atan2(Math.sin(bearing * Math.PI/180) * Math.sin(d) * Math.cos(calLat), Math.cos(d) - Math.sin(calLat) * Math.sin(newLat));

newLat = newLat * 180 / Math.PI;
newLng = newLng * 180 / Math.PI;
return [newLat, newLng]
}
console.log(calPoint(35.252800, 128.605800, 35.254200, 128.604200, 70))