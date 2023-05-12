function calPoint (lat1, lng1, lat2, lng2, rssi){
    function calculateDistance(rssi) {
      var txPower = +59;
      var n = 2;
      var distance = Math.pow(10, (txPower - rssi) / (10 * n));
      return distance.toFixed(2);
    }
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
  let newLat = Math.asin(Math.sin(calLat) * Math.cos(d) + Math.cos(calLat) * Math.sin(d) * Math.cos(bearing * Math.PI/180));
  let newLng = calLng + Math.atan2(Math.sin(bearing * Math.PI/180) * Math.sin(d) * Math.cos(calLat), Math.cos(d) - Math.sin(calLat) * Math.sin(newLat));

  newLat = newLat * 180 / Math.PI;
  newLng = newLng * 180 / Math.PI;
  return [newLat, newLng]
  }