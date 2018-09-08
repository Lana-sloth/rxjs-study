import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printing-message',
  styleUrls: ['./printing-message.component.css'],
  template: `
  <h1>Printing Message</h1>
  <input (keyup)="onKey($event)" (change)="printMessage()">
  <button (click)="printMessage()">Print</button>
  <p>{{ outputText }}</p>
  `
})
export class PrintingMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputText;
  outputText = '';

  onKey($event){
    this.inputText = $event.target.value;
  }

  printMessage(){
    this.outputText = this.inputText;
  }

}
