import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexMenuComponent } from './index-menu/index-menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { TimerComponent } from './projects/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexMenuComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
