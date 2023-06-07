import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SujectTest1Component } from './suject-test1/suject-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SujectTest1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ParentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
