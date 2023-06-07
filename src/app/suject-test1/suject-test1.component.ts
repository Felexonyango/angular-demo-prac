import { Subject, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suject-test1',
  templateUrl: './suject-test1.component.html',
  styleUrls: ['./suject-test1.component.css']
})
export class SujectTest1Component implements OnInit {
  //Subjects are like EventEmitters: they maintain a registry of many listeners.
  //Every Subject is an Observable. Given a Subject, you can subscribe to it, providing an 
  //Observer, which will start receiving values normally.
  subject = new Subject<number>();
  constructor(){

  }
  ngOnInit(): void {
      this.TestFunction()
  }


  TestFunction(){
    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
      
    });
    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    })

const observable = from([1, 2, 3]);
 
observable.subscribe(this.subject)
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
//That means is muticast when subscribed on 

  }

    
     
    


}
