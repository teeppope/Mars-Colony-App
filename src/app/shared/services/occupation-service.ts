import {Injectable} from '@angular/core';
import {IOccupation} from '../models';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OccupationService{
	occupationsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
	constructor(private http: Http){

	}
	getOccupations(): Promise<IOccupation[]>{
		return this.http.get(this.occupationsUrl)
					.toPromise()
					.then(response => response.json().jobs)
					.catch(this.handleError);
	}
	private handleError(error: any): Promise<void>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}