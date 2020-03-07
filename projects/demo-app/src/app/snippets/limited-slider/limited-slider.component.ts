import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-limited-slider',
  templateUrl: './limited-slider.component.html'
})
export class LimitedSliderComponent {
  value = 50;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minLimit: 10,
    maxLimit: 90
  };
}
