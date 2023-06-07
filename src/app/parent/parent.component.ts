import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//emits values to child component
  parentMessage="Parent title changed"
  titles =["A", "B"]
  addTitle(newTitle:string){
    this.titles.push(newTitle)
    console.log(newTitle,'test data')
  }
}
