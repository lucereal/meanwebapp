import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { getSquare } from '../../../../tester.js';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  name: string;

  constructor(private http: HttpClient) { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  getASquare(x){
    return getSquare(x);
  }

  getResume(user){
    return this.http.post('http://localhost:3000/resume', user, httpOptions);

  }

  
  
}
