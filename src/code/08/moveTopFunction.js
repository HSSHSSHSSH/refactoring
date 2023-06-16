/**
 * 搬移函数
 * 直接原因：一个函数频繁引用其他上下文中的元素而与自身上下文中的元素关系不大
 */


// 将 calculateDistance 函数搬移到顶层


function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
  result += distance(points[i-1], points[i]);
  }
  return result;
}
function distance(p1, p2) { // 只调用了radians函数
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
  Math.pow(Math.sin(dLat / 2), 2) +
  Math.cos(radians(p2.lat)) *
  Math.cos(radians(p1.lat)) *
  Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}


function radians(degrees) { // 未调用所在上下文中的其他函数
  return (degrees * Math.PI) / 180;
}

function trackSummary(points) {
const totalTime = calculateTime();
const pace = totalTime / 60 / totalDistance(points) ;
  return {
    time: totalTime,
    distance: Number(totalDistance(points).toFixed(2)),
    pace: Number(pace.toFixed(2))
  };

  function calculateTime() { 
    ///
    return 60
  }
}



module.exports = {
  trackSummary
}