//This is the report form page component view

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Encounter, IAlien, Colonist } from '../shared/models';
import { ColonistService } from '../shared/services/colonist-service';
import { EncounterService } from '../shared/services/encounters-service';
import { AlienService } from '../shared/services/alien-service';

@Component({
	moduleId: module.id,
	selector: 'app-report',
	templateUrl: 'report.component.html',
	styleUrls: ['report.component.css']
})
export class ReportComponent {

	title: string = 'Report Alien Encounter!';

	NO_ALIEN_SELECTED = '(none)';

	public encounter: Encounter;
	public aliens: IAlien[];

	constructor(
		private router: Router,
		private encounterService: EncounterService,
		private alienService: AlienService,
		private colonistService: ColonistService
		) { 
		const colonistId = this.colonistService.getColonistId();

		this.encounter = new Encounter('', '', '', colonistId);

		alienService.getAliens().then(aliens => this.aliens = aliens);
	}

	onSubmit(){
		this.encounter.formattedDate
		this.encounterService.addEncounters(this.encounter).then(encounter => {
			this.router.navigate(['../encounters']);
		});
	}

	get noAliens(){
		return this.encounter.atype === this.NO_ALIEN_SELECTED;
	}
}
