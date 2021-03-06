import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexMenuComponent } from './index-menu/index-menu.component';
import { TimerComponent } from './projects/timer/timer.component';
import { PrintingMessageComponent } from './projects/printing-message/printing-message.component';
import { PlayableCharactersComponent } from './projects/playable-characters/playable-characters.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexMenuComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'printing-message', component: PrintingMessageComponent },
  { path: 'playable-characters', component: PlayableCharactersComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
