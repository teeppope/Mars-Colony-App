import { Pipe, PipeTransform } from '@angular/core';
import { Encounter } from '../models';

@Pipe(
	{name: 'sortByDate'}

	)

export class SortByDate implements PipeTransform {

	transform( encountersList: Array<any> ){

		if(encountersList){
			return encountersList
				.map(encounter => {
				encounter.date = new Date(encounter.date).getTime();
				return encounter;
			})

			.sort((a, b) => {
				if (a.date > b.date){ return 1; };
				if (a.date < b.date){ return -1; };
					return 0;
				})

			.map(encounter => {
				const date =  new Date(encounter.date);
				encounter.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
				return encounter;
				});
		}
	}
}
