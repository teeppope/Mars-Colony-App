import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien-service';
import { OccupationService } from './shared/services/occupation-service';
import { EncounterService } from './shared/services/encounters-service';
import { ColonistService } from './shared/services/colonist-service';
import { MarsblogService } from './shared/services/marsblog-service';
import { Colonist } from './shared/models';
import { Encounter } from './shared/models';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AlienService, OccupationService, EncounterService, ColonistService, MarsblogService ],
  directives: [ROUTER_DIRECTIVES],
})

export class AppComponent {	

	colonist: Colonist;
	encounter: Encounter;

  constructor(  alienService: AlienService, 
    occupationService: OccupationService, 
    encounterService: EncounterService, 
    colonistService: ColonistService,
    marsblogService: MarsblogService){
  }
}