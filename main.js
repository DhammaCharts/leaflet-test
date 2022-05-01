
// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.

const extent = [0, 0, 5080, 7697];
const projection = new ol.proj.Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent,
});


const map = new ol.Map({
  // interactions: ol.interaction.defaultInteractions.extend([new ol.interaction.DragRotateAndZoom()]),
  layers: [

    // new ol.layer.Tile({
    //     source: new ol.source.ImageStatic({
    //             url: 'maps/{z}/{x}/{y}.png'
    //     })
    //suttapitaka-min2
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
        url: 'sutta.png',
        projection: projection,
        imageExtent: extent,
      }),

    }),
  ],
  target: 'map',
  view: new ol.View({
    projection: projection,
    center: ol.extent.getCenter(extent),
    zoom: 2,
    maxZoom: 8,
  }),
});

////////// example 2 ////////////

//
// var newLayer = new ol.layer.Tile({
//     source: new ol.source.OSM({
//             url: 'maps/{z}/{x}/{y}.png'
//     })
// });
//
// var map = new ol.Map({
//     layers: [
//     newLayer
//     ],
//   controls: [],
//   target: 'map',
//   view: new ol.View({
//     center: ol.proj.transform([4.666389, 50.009167], 'EPSG:4326', 'EPSG:3857'),
//     zoom: 4,
//     minZoom: 1,
//     maxZoom: 20
//   })
// });
