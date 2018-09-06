import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer, Subject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  styleUrls: ['./timer.component.css'],
  template: `
  <h1>Timer</h1>
  <div>{{ clock | async }}</div>
  <button (click)="reset$.next()">reset</button>
  `
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  reset$ = new Subject()
  clock = interval(1000);
}
