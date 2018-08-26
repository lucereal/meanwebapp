import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username;
password;

  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {

  }

  onRegisterSubmit(){
     const user = {
      username: this.username,
      password: this.password
    }
    //this.route.params.subscribe(params => this.name = params.name);
    
    this.authService.login(user).subscribe(
      (data:any) => { console.log(data);

        if(data.success){
          console.log(data.success);
          this.dataService.saveProfile(data.user);
          this.router.navigate(['/resume'],data);
        }else{
          this.router.navigate(['/register']);
        }
       }//end data =>
    )
  }
}
