export interface IColonist{
	name: string;
	age: number;
	description: string;
	job: IOccupation;
}

export interface IEncounter{
	atype: string;
	date: number;
	action: string;
	colonist_id: number;
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