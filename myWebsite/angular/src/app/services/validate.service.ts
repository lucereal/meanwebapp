import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.school == undefined || user.gpa == undefined){
      return false;
    }else{
      return true;
    }
  }
}
