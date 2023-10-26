import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../model/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getusers():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users')
  
  }


}
