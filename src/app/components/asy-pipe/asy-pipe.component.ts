import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-asy-pipe',
  templateUrl: './asy-pipe.component.html',
  styleUrls: ['./asy-pipe.component.css']
})
export class AsyPipeComponent implements OnDestroy,OnInit  {
  constructor() {}
  
  ngOnInit(): void {
      
    
  }
  ngOnDestroy(): void {
      
  }


  users=[
    {name:"John ",email:"john@gmail.com"},
    {name:"Felex ",email:"john@gmail.com"},
    {name:"John ",email:"john@gmail.com"},

  ]
   users$ =of(this.users)





}
