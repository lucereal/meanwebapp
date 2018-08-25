import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

username;
  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }



}
