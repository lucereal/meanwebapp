import { Injectable } from '@angular/core';
//import {HttpModule, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post('http://localhost:3000/users/register', user, httpOptions)
      //.pipe(map(res => {res}));
  }
}
