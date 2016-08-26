//This is the arrival form page component view
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { ColonistService } from '../shared/services/colonist-service';
import { OccupationService } from '../shared/services/occupation-service';


//PRobably don't need the below.
// interface ArrivalInterface{
// 	colonist: Colonist;
// 	occupations: IOccupation[];
// 	NO_OCCUPATION_SELECTED: string;
// 	onSubmit: Function;
// }

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})


export class ArrivalComponent {
	title: string = 'Register'; 

	NO_OCCUPATION_SELECTED = '(none)';

	public occupations: IOccupation[];
	public colonist: Colonist;

	constructor(
		private router: Router,
		private colonistService: ColonistService,
		private occupationService: OccupationService
	) { 

		this.colonist = new Colonist ('','', this.NO_OCCUPATION_SELECTED);

		//call the API using the service to GET occupations
		occupationService.getOccupations().then(jobs => this.occupations = jobs);

	}

	onSubmit(){
		this.colonistService.sendColonist(this.colonist).then(colonist => {
			this.router.navigate(['../encounters']);
		});
		// .catch(error => {
		// 	//TODO Handle Error
		// });
	}

	// updateColonist(){
	// 	console.log('updating colonist');
	// 	this.colonist = new Colonist ('', '', this.NO_OCCUPATION_SELECTED);

	// }

	get noOccupation(){
		return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
	}
}
