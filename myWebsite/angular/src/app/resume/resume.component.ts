import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  todaysDate;
  square;
  name;
  constructor(private resumeservice: ResumeService) { }

  ngOnInit() {
    this.todaysDate = this.resumeservice.showTodayDate();
    this.square = this.resumeservice.getASquare(4);
  }

  onRegisterSubmit(){
    
    this.resumeservice.getResume(name).subscribe(
      data => { console.log(data); }
    )
  }
}
