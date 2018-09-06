import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-menu',
  styleUrls: ['./index-menu.component.css'],
  template: `
  <button routerLink="/timer">Timer</button>
  `
})
export class IndexMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
