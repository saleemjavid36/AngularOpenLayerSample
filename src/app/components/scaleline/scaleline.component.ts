import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import ControlScaleLine from 'ol/control/ScaleLine';

@Component({
  selector: 'app-scaleline',
  // templateUrl: './scaleline.component.html',
  // styleUrls: ['./scaleline.component.css']
  template:``,
  styles:[],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScalelineComponent {
  @Input() map: Map |any ;
  control: ControlScaleLine | any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.control = new ControlScaleLine({
      target: this.elementRef.nativeElement,
    });
    this.map.addControl(this.control);
  }
}
