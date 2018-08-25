import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { ValidateService } from '../services/validate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  school: String;
  gpa: String;
  password;

  constructor(
    private authservice: AuthenticateService,
    private validateservice: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      school: this.school,
      gpa: this.gpa,
      password: this.password
    }
    
    
    // if(!this.validateservice.validateRegister(user)){
    //   return false;
    // }

    //register user
    this.authservice.registerUser(user).subscribe((data:any) => {
        console.log(data);
      
        if(data.success){
          console.log(data.success);
          this.router.navigate(['/resume'],data);
        }else{
          this.router.navigate(['/register']);
        }
      }
    )

  }// end onRegisterSubmit()
}
