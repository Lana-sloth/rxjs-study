import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-menu',
  styleUrls: ['./index-menu.component.css'],
  template: `
  <h1>Projects List</h1>
  <ol>
    <li><a routerLink="/timer">Timer</a></li>
  </ol>
  `
})
export class IndexMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
