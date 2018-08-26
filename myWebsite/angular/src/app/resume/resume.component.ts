import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

username;
school;
gpa;
  constructor(private router: Router,
    private actRoute: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit() {
    if(this.dataservice.getProfile() != undefined){
      let user = this.dataservice.getProfile()
      console.log("from resumecomp: " + JSON.stringify(user));
      this.username = user.name;
      this.school = user.school;
      this.gpa = user.gpa;
    }

  }



}
