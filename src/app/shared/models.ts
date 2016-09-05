export class Colonist{
	constructor( public name: string,
		public age: string,
		public job_id: string) {

	}
}
export class Encounter{
	constructor( public atype: string,
		private date: string,
		public action: string,
		public colonist_id: string){
		
		this.date = this.formattedDate;
	}
	
	get formattedDate(): string{
		let date = new Date();
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	}
}

export interface IAlien{
	type: string;
	description: string;
	submitted_by: string;
}

export interface IOccupation{
	name: string;
	description: string;
}