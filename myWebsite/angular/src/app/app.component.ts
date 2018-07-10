import { Component } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume app';
  todaysDate;
  square;
  constructor(private resumeservice: ResumeService){}
  ngOnInit(){
    this.todaysDate = this.resumeservice.showTodayDate();
    this.square = this.resumeservice.getASquare(4);
  }
}
