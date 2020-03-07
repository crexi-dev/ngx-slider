import { Component } from '@angular/core';
import { Options } from 'ngx-slider';

@Component({
  selector: 'app-custom-legend-function-slider',
  templateUrl: './custom-legend-function-slider.component.html'
})
export class CustomLegendFunctionSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    getLegend: (value: number): string => {
      return '<b>T</b>' + value;
    }
  };
}
