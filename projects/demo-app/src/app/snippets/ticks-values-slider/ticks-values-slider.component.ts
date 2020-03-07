import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-ticks-values-slider',
  templateUrl: './ticks-values-slider.component.html'
})
export class TicksValuesSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
}
