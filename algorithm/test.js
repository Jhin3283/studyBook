function calculateDistance(rssi) {
  var txPower = +59;
  var n = 2;
  var distance = Math.pow(10, (txPower - rssi) / (10 * n));
  return distance.toFixed(2);
}

console.log(calculateDistance(19))