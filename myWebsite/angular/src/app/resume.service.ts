import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { getSquare } from '../../../tester.js';

@Injectable({
  providedIn: 'root'
})

export class ResumeService {
  constructor() { }
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  getASquare(x){
    return getSquare(x);
  }
  
}
