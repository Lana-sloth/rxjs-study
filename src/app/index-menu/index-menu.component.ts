import { Component } from '@angular/core';

@Component({
  selector: 'app-index-menu',
  styleUrls: ['./index-menu.component.css'],
  template: `
  <h1>Projects List</h1>
  <ol>
    <li><a routerLink="/timer">Timer</a></li>
    <li><a routerLink="/printing-message">Printing message</a></li>
    <li><a routerLink="/playable-characters">Playable Characters</a></li>
  </ol>
  `
})
export class IndexMenuComponent {}
