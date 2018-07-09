import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ResumeService {
  constructor() { }
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
