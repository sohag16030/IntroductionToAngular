import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hostListner/hover.directive';
import { BackgroundStyleDirective } from './hostListner/background-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    BackgroundStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
