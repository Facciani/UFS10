import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteDiProvaComponent } from './componente-di-prova/componente-di-prova.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDiProvaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    ComponenteDiProvaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
