import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  todaysDate;
  square;
  name;
  resume;
  school;
  data;
  gpa;
  constructor(private resumeservice: ResumeService) { }

  ngOnInit() {
    this.todaysDate = this.resumeservice.showTodayDate();
    this.square = this.resumeservice.getASquare(4);
  }

  onRegisterSubmit(){
     const user = {
      name: this.name
    }
    //this.route.params.subscribe(params => this.name = params.name);
    
    this.resumeservice.getResume(user).subscribe(
      data => { console.log(data);
        this.data = data;
        
        this.school = this.data.resume.school;
        this.gpa = this.data.resume.gpa;
       }//end data =>
    )
  }
}
