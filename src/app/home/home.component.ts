//This is the First page component view

import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
	title: string = 'Mars Colony';

  constructor() { }

  ngOnInit() {
  }

}
