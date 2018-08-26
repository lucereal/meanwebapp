import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  user:any;
;

  saveProfile(user){
    console.log(user);
    this.user = user;
  }

  getProfile(){
    return this.user;
  }


}
