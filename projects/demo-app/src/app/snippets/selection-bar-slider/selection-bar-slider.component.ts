import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-selection-bar-slider',
  templateUrl: './selection-bar-slider.component.html'
})
export class SelectionBarSliderComponent {
  value = 10;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true
  };
}
