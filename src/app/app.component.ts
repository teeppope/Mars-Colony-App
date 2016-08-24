import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien-service';
import { OccupationService } from './shared/services/occupation-service';
import { EncounterService } from './shared/services/encounters-service';
import { ColonistService } from './shared/services/colonist-service';
import { Colonist } from './shared/models';
import { Encounter } from './shared/models';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AlienService, OccupationService, EncounterService, ColonistService ],
  directives: [ROUTER_DIRECTIVES],
})

export class AppComponent {	
  
	colonist: Colonist;
	encounter: Encounter;	

  constructor(  alienService: AlienService, 
  				occupationService: OccupationService, 
  				encounterService: EncounterService, 
  				colonistService: ColonistService){
  	
 //  	this.colonist = new Colonist('Terra','45','2');

 //  	this.encounter = new Encounter('Endomorph', ' ', 'Hi Hi Hi ' , '555');

 //  	encounterService.addEncounters({encounter: this.encounter})
 //  		.then(encounter => {
 //  			console.log(encounter);
 //  		});

	// colonistService.sendColonist(this.colonist)
	// 	.then(colonist => {
	// 		console.log(colonist);
	// 	});
  }
}

