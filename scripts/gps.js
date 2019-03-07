function doGet() {
    navigator.geolocation.getCurrentPosition(doMakeInfo, function(e) { jumpSelf() }, {"enableHighAccuracy": true, "timeout": 20000, "maximumAge": 2000});
}
function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
          return null;
        }
      }
    } else {
      return null;
    }
  }
function doMakeInfo(position) {
    var geo_text = "緯度:" + position.coords.latitude + "\n";
    geo_text += "経度:" + position.coords.longitude + "\n";
    geo_text += "高度:" + position.coords.altitude + "\n";
    geo_text += "位置精度:" + position.coords.accuracy + "\n";
    geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
    geo_text += "移動方向:" + position.coords.heading + "\n";
    geo_text += "速度:" + position.coords.speed + "\n";

    var date = new Date(position.timestamp);

    geo_text += "取得時刻:" + date.toLocaleString() + "\n";

    console.log(geo_text)
    alert("あなたの現在地はここですね？↓")
    window.location.href = 'https://www.google.com/maps?q='+position.coords.latitude+","+position.coords.longitude;
}
function jumpSelf(){
    alert("GPSを有効にしてからアクセスしてください。");
    window.location.href = "https://androck.jp/smartphoneuse/sp-manual/locationinformation/";
}