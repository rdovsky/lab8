function initMap() {
  L.mapquest.key = 'BGeW5a2A6IdTGDQxA1UUwXrcD1YA8UZL';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.878822, -117.235931],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  //add marker to the mapQuest
  L.marker([32.878822, -117.235931]).addTo(map);
}
