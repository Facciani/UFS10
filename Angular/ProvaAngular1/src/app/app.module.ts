import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ApplicaColoreDirective } from './applica-colore.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ApplicaColoreDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
