//This is the arrival form page component view
import { Router } from '@angular/router';
import { Component, HostBinding, trigger, state, style, animate, transition } from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { ColonistService } from '../shared/services/colonist-service';
import { OccupationService } from '../shared/services/occupation-service';


@Component({
	moduleId: module.id,
	selector: 'app-arrival',
	templateUrl: 'arrival.component.html',
	styleUrls: ['arrival.component.css'],
	animations:[ 
	trigger('scaleIn', [
		state('in', style({ transform: 'translateY(0)' })),
		transition('void => in', [
			style({
				height: '0px',
				transform: 'translateY(-100vh)'
			}),
			animate('0ms 500ms ease', style(
			{
				height: 'auto'
			})
			),
			animate('500ms 500ms ease', style(
			{
				transform: 'translateY(0)'
			})
			)
			])
		])
	]
})


export class ArrivalComponent {

	@HostBinding('@scaleIn') hostAnimation = "in";

	title: string = 'Register for the Colony'; 

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
	}
	get noOccupation(){
		return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
	}
}
