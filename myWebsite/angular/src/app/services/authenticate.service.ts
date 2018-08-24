import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient
  ) { }

  user:any;

  registerUser(user){

    return this.http.post('http://localhost:3000/register', user, httpOptions);
   
  }
}
