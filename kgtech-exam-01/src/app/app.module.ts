import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToCelciusPipe } from './to-celcius.pipe';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ToCelciusPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
