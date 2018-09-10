import { Component } from '@angular/core';
import { Observable, interval, timer, Subject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  styleUrls: ['./timer.component.css'],
  template: `
  <h1>Timer</h1>
  <div>{{ clock | async }}</div>
  `
})
export class TimerComponent {
  clock = interval(1000);
}
