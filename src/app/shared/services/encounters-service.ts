import {Injectable} from '@angular/core';
import {Encounter} from '../models';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncounterService{
	
	encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
	
	constructor(private http: Http){

	}
	getEncounters(): Promise<Encounter[]>{
		return this.http.get(this.encountersUrl)
					.toPromise()
					.then(response => response.json().encounters.reverse())
					.catch(this.handleError);
	}
	addEncounters(encounter): Promise<Encounter>{
		let headers = new Headers({'Content-Type': 'application/json'});
	    let body = JSON.stringify({ encounter });

	     return this.http
               .post(this.encountersUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().encounter)
               .catch(this.handleError);
	}

	private handleError(error: any): Promise<void>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}