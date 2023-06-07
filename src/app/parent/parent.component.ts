import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  titles =["A", "B"]

  addTitle(newTitle:string){
    this.titles.push(newTitle)
    
  }
}
