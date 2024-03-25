import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hostListner/hover.directive';
import { BackgroundStyleDirective } from './hostListner/background-style.directive';
import { BetterhighlightDirective } from './hostBinding/betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    BackgroundStyleDirective,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
