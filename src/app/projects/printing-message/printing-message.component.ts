import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-printing-message',
  styleUrls: ['./printing-message.component.css'],
  template: `
  <h1>Printing Message</h1>
  <input (keyup)="onKey($event)" (change)="printMessage()">
  <button (click)="printMessage()">Print</button>
  <p>{{ outputText | async }}</p>
  `
})
export class PrintingMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  inputText;
  outputText;

  onKey($event){
    this.inputText = $event.target.value;
  }

  printMessage(){
    if(!this.inputText){
      this.outputText = '';
    }
    let message = []
    let arr = this.inputText.split('');
    this.outputText = interval(500)
    .pipe(
      take(arr.length),
      map((i) => {
        message.push(arr[i]);
        return message.join('');
      })
    )
  }

}
