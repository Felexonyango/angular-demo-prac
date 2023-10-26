import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SujectTest1Component } from './components/suject-test1/suject-test1.component';
import { AsyPipeComponent } from './components/asy-pipe/asy-pipe.component';
import { PipesPractiseComponent } from './components/pipes-practise/pipes-practise.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponentComponent } from './common/search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SujectTest1Component,
    AsyPipeComponent,
    PipesPractiseComponent,
    
  ],
  imports: [
    BrowserModule,
    SearchComponentComponent,
    UserComponent,   
  ],
  providers: [ParentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
