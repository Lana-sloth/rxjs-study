import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexMenuComponent } from './index-menu/index-menu.component';
import { TimerComponent } from './projects/timer/timer.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexMenuComponent },
  { path: 'timer', component: TimerComponent }
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
