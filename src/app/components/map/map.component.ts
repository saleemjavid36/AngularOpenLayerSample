import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import Map from 'ol/Map';

@Component({
  selector: 'app-map',
  // templateUrl: './map.component.html',
  template:'',
  styles: [':host { width: 100%; height: 100%; display: block; }',
],
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @Input() map: Map | any;
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.map.setTarget(this.elementRef.nativeElement);
  }
}
