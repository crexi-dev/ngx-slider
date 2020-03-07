import { Component } from '@angular/core';
import { Options, ChangeContext, PointerType } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-user-events-slider',
  templateUrl: './user-events-slider.component.html'
})
export class UserEventsSliderComponent {
  minValue = 20;
  maxValue = 80;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  logText = '';

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }
}
