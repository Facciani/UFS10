import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BoxComponent } from './box/box.component';

@NgModule({
    declarations: [
        AppComponent,
        BoxComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        BoxComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
