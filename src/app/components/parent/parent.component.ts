import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = 'Hello from the parent component!';
  titles =["A", "B"]

  addTitle(newTitle:string){
    this.titles.push(newTitle)
    
  }

  handleClick(){
    console.log("handleClick successfully")
  }


}
