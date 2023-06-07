import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy,OnInit  {
 
  @Input() message!: string;

  constructor() {}
  ngOnDestroy() {
    console.log('child component is destroyed');
  }
  ngOnInit() {
  console.log(this.message,'this is child component')
  }
}
