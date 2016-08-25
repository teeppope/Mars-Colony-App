//This is the report form page component view

import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})
export class ReportComponent implements OnInit {
	title: string = 'Report Encounter!'; 
  constructor() { }

  ngOnInit() {
  }

}
