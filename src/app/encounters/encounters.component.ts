//This is the encounter feed component view
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Encounter } from '../shared/models';
import { EncounterService } from '../shared/services/encounters-service';

// Keeping the pipe function just incase the data in the datebase gets sorted better.
// import { SortByDate } from '../shared/pipe/date-pipe';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  // pipes: [SortByDate]
})
export class EncountersComponent{
	title: string = 'Recent Encounters';

	public encounters: Encounter[];

  constructor(
    private router: Router,
    private encounterService: EncounterService
    ) { 
    encounterService.getEncounters().then(encounters => this.encounters = encounters);
  }



}
