var map1 = L.map('map1').setView([50.0, 50.0], 2);
L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map1);

var map2 = L.map('map2').setView([50.0, 50.0], 2);
L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map2);

var lat1 = 0.0;
var lng1 = 0.0;
var lat2 = 0.0;
var lng2 = 180.0;

var marker1 = L.marker();
var marker2 = L.marker();
var popup1 = L.popup();
var popup2 = L.popup();

function map1Click(e1) {
    lat1 = e1.latlng.lat;
    lng1 = e1.latlng.lng;
    lat2 = -e1.latlng.lat;
    lng2 = e1.latlng.lng - 180;
    popup1
        .setLatLng(e1.latlng)
        .setContent("(" + lat1.toFixed(3).toString() + ", " + lng1.toFixed(3).toString() + ")")
        .openOn(map1);
    popup2
        .setLatLng([lat2, lng2])
        .setContent("(" + lat2.toFixed(3).toString() + ", " + lng2.toFixed(3).toString() + ")")
        .openOn(map2);
    map1.panTo(e1.latlng);
    map2.panTo([lat2, lng2]);
}

function map2Click(e2) {
    lat1 = -e2.latlng.lat;
    lng1 = e2.latlng.lng - 180;
    lat2 = e2.latlng.lat;
    lng2 = e2.latlng.lng;
    popup1
        .setLatLng([lat1, lng1])
        .setContent("(" + lat1.toFixed(3).toString() + ", " + lng1.toFixed(3).toString() + ")")
        .openOn(map1);
    popup2
        .setLatLng([lat2, lng2])
        .setContent("(" + lat2.toFixed(3).toString() + ", " + lng2.toFixed(3).toString() + ")")
        .openOn(map2);

    map1.panTo([lat1, lng1]);
    map2.panTo([lat2, lng2]);
}
map1.on('click', map1Click);
map2.on('click', map2Click);