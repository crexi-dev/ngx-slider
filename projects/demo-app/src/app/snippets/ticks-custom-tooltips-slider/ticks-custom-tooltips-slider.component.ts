import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-ticks-custom-tooltips-slider',
  templateUrl: './ticks-custom-tooltips-slider.component.html'
})
export class TicksCustomTooltipsSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    ticksTooltip: (v: number): string => {
      return 'Tooltip for ' + v;
    }
  };
}
