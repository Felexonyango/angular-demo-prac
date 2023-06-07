import { Component, Input,Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy,OnInit  {

  @Output() newtitle =new EventEmitter<string>()
  // Output properties (@Output()) allow the child component to emit events to notify
  //  the parent component about certain actions or changes. The child component can 
  //  define custom events using EventEmitter,
  //  and the parent component can listen to these events and react accordingly.
  constructor() {}

  // In summary, input properties are used when passing data from parent to child,
  //  while output properties are used when emitting events from child to parent
  ngOnInit() {
    
  }
  
  ngOnDestroy() {
   
  }
  addMethod(value:string) {
    this.newtitle.emit(value);
  }
}
