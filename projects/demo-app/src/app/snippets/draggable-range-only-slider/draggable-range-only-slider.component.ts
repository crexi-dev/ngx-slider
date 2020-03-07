import { Component } from '@angular/core';
import { Options } from 'ngx-slider';

@Component({
  selector: 'app-draggable-range-only-slider',
  templateUrl: './draggable-range-only-slider.component.html'
})
export class DraggableRangeOnlySliderComponent {
  minValue = 4;
  maxValue = 6;
  options: Options = {
    floor: 0,
    ceil: 10,
    draggableRangeOnly: true
  };
}
