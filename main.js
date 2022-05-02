
// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.


const width = 1;
const height = 1;
// const width = 5080 + 3000;
// const height = 7697;

const extent = [0, 0, width, height];
const projection = new ol.proj.Projection({
  code: 'pixels',
  units: 'pixels',
  extent: extent,
});


const map = new ol.Map({
  // interactions: ol.interaction.defaultInteractions.extend([new ol.interaction.DragRotateAndZoom()]),
  layers: [

    new ol.layer.Tile({
        // extent: extent,
        source: new ol.source.TileImage({
                url: 'maps/{z}/{y}/{x}.png'
        })
    //suttapitaka-min2
    // new ol.layer.Image({
    //   source: new ol.source.ImageStatic({
    //     attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
    //     url: 'sutta.png',
    //     projection: projection,
    //     imageExtent: extent,
    //   }),

    }),
  ],
  target: 'map',
  view: new ol.View({
    projection: projection,
    center: ol.extent.getCenter(extent),
    // center: [width/2 , height/2],
    // center: ol.proj.transform([0, 0, 1500, 3000]),
    zoom: 2,
    maxZoom: 6,
  }),
  interactions: ol.interaction.defaults({altShiftDragRotate: false}).extend([
      new ol.interaction.DragRotate({condition: ol.events.condition.platformModifierKeyOnly})
   ])
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
