import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { fromLonLat } from 'ol/proj';
import {Icon, Stroke, Style } from 'ol/style';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { unByKey } from 'ol/Observable';
import { getVectorContext } from 'ol/render';
import { easeOut } from 'ol/easing';
import CircleStyle from 'ol/style/Circle';
import {HttpClient} from '@angular/common/http'
import { LocationsData } from './components/location';
import XyzSource from 'ol/source/XYZ'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'openlayers-angular';

  map: Map | any
  locationsList :any[]=[] 
  
  vectorSource: any;
  marker: Map | any;
  vectorLayer: | any;
  tileLayer:  | any;
  view: | any;
  xyzSource: any;
  chicago: any;
  london: any;


  // map: Map ;
  // vectorSource: VectorSource;
  // vectorLayer: VectorLayer;
  // xyzSource: XyzSource;
  // tileLayer: TileLayer;
  // view: View;
  // marker: Feature;
  //  locationsList:LocationsData[] =[]
  
  // const fileData = fs.readFileSync(mapsData.json)

  // map;
  // chicago;
  // vectorSource;
  // vectorLayer;
  // rasterLayer;
  // london: any;
  // madrid: any;
  
  constructor(private http:HttpClient){
    this.http.get('assets/mapsdata.json').subscribe((data:any)=>{
      // this.locationsList.push(data)
      if(data){
        data.map((e:any)=>{
          this.locationsList.push(e)
        })
      }else{
        console.log('Error occured')
      }

    })
    
    
  }

  
  ngOnInit(): void {

    this.initilizeMap();
 
  }
  initilizeMap(){

     this.london = new Feature({
      geometry: new Point(fromLonLat([-0.12755, 51.507222])),
    });
    

    // this.chicago.setStyle(new Style({
    //   image: new Icon(({
    //     color: '#8959A8',
    //     crossOrigin: 'anonymous',
    //     src: '/src/assets/map-marker.png',
    //     imgSize: [20, 20]
    //   }))
    // }));

    this.london.setStyle(
      new Style({
        image: new Icon({
          color: 'rgba(255, 0, 0, .5)',
          crossOrigin: 'anonymous',
          src: 'data/bigdot.png',
          scale: 0.2,
        }),
      })
    );

    this.vectorSource = new VectorSource({
      features: [this.london]
    });


    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.map = new Map({
      target: 'ol-map',
      layers: [ new TileLayer({
        source: new OSM()
      }), this.vectorLayer ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 4
      })
    });


  }

  
}
