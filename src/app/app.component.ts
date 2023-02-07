import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openlayers-angular';

  map: Map | any

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
    const marker = new Overlay({
      position: fromLonLat([37.41, 8.82]),
      positioning: 'center-center',
      element: document.getElementById('marker'),
      stopEvent: false
    });
    this.map.addOverlay(marker);
  }
}






// var sites new OpenLayers.Layer.Markers( 'Sites' );
// map.addLayer( sites );
// addSiteMarkers( sites );

// function addMarker( layer, lat, lng, img ) {
//   var size   = new OpenLayers.Size( 32, 37 );
//   var offset = new OpenLayers.Pixel( -(size.w/2), -size.h );
//   var icon   = new OpenLayers.Icon( 'img/marker/' + img, size, offset );
//   var marker = new OpenLayers.Marker( getLocation( lat, lng ), icon );

//   layer.addMarker( marker );

//   marker.events.register( 'click', layer, clickMarker );
// }

// function clickMarker() {
//   alert( 'click' );

//   // Pop-up code will go here...
// }

// function addSiteMarkers( sites ) {
//   addMarker( sites, -113.3017895, 49.1939798, 'store.png' );
//   addMarker( sites, -113.3072538, 49.2013626, 'building.png' );
// }

// map = new OpenLayers.Map("mapdiv");
//     map.addLayer(new OpenLayers.Layer.OSM());

//     //var results = new OpenLayers.Layer.Text("My Points", { location:"./checkIns_0_view.txt", projection: map.displayProjection});
//     //map.addLayer(results);

//     var query = new OpenLayers.LonLat(-122.2928337167, 37.5549570333).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject());
//     var markers = new OpenLayers.Layer.Markers("Markers");
//     map.addLayer(markers);
//     var size = new OpenLayers.Size(21,25);
//     var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
//     var icon = new OpenLayers.Icon('http://openlayers.org/dev/img/marker-blue.png', size, offset);
//     marker = new OpenLayers.Marker(query, icon);
//     markers.addMarker(marker);

//     var zoom=16;
//     map.setCenter (query, zoom);