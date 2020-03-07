import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-ticks-slider',
  templateUrl: './ticks-slider.component.html'
})
export class TicksSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true
  };
}
