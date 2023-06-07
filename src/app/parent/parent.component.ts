import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//emits values to child component

  @Output() messageEvent =new EventEmitter<string> ();
  
  parentMessage!:string
  sendMessage() {
    this.parentMessage = 'Hello from parent!';
    this.messageEvent.emit(this.parentMessage);
  }
}
