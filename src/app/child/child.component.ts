import { Component, Input,Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy,OnInit  {
  @Input() title!:string
  @Output() newtitle =new EventEmitter<string>()

  constructor() {}
  ngOnDestroy() {
    console.log('child component is destroyed');
  }
  ngOnInit() {
    
  }

  addMethod(value:string) {
    this.newtitle.emit(value);
  }
}
