import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarsblogService } from '../shared/services/marsblog-service';
// import { IMarsblog } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-marsblog',
  templateUrl: 'marsblog.component.html',
  styleUrls: ['marsblog.component.css']
})
export class MarsblogComponent {
	title: string = 'The Mars Colony Blog';

	public marsblogs: any[];

	constructor(
		private router: Router,
		private marsblogService: MarsblogService
	) { 
		marsblogService.getMarsblog().then(marsblogs => {
      this.marsblogs = marsblogs
      console.log(marsblogs);
    });
  }
}
