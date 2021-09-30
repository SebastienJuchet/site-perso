mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJvd2x5NDAiLCJhIjoiY2s2OTQ1b3AwMGIxcjNrcWo0MXdtZTRseCJ9.goBmMVra4yIQgexoPzL3fw";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-1.148661400925931, 44.62957683381483], // starting position [lng, lat]
  zoom: 12, // starting zoom
});

let marker = new mapboxgl.Marker()
  .setLngLat([-1.148661400925931, 44.62957683381483])
  .addTo(map);
