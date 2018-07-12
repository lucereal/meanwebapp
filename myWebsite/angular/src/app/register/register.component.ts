import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authservice: AuthenticateService,
    private validateservice: ValidateService
  ) { }

  ngOnInit() {
  }

  name: String;
  school: String;
  gpa: String;

  onRegisterSubmit(){
    const user = {
      name: this.name,
      school: this.school,
      gpa: this.gpa
    }

    if(!this.validateservice.validateRegister(user)){
      return false;
    }

    //register user
    this.authservice.registerUser(user).subscribe(
      data => {
        console.log(data);
      }
    )

  }
}
