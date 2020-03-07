import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-right-to-left-slider',
  templateUrl: './right-to-left-slider.component.html'
})
export class RightToLeftSliderComponent {
  value = 20;
  options: Options = {
    floor: 10,
    ceil: 100,
    step: 5,
    rightToLeft: true
  };
}
