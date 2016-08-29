
import {Injectable} from '@angular/core';
import {Colonist} from '../models';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistService{
	
	colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
	private COLONIST_ID_KEY: string = 'colonistId';

	constructor(private http: Http){

	}
	getColonists(): Promise<Colonist[]>{
		return this.http.get(this.colonistsUrl)
					.toPromise()
					.then(response => response.json().colonists)
					.catch(this.handleError);
	}
	sendColonist(colonist: Colonist): Promise<Colonist>{
		let headers = new Headers({'Content-Type': 'application/json'});
	    let body = JSON.stringify({ colonist });

	     return this.http
               .post(this.colonistsUrl, body, { headers: headers })
               .toPromise()
               .then(response => {
               		const colonist = response.json().colonist;
               		this.saveColonistToStorage(colonist.id);
               		return colonist;
               	})
               .catch(this.handleError);
	} 
	public getColonistId(): string{

		return window.localStorage.getItem(this.COLONIST_ID_KEY);
	}
	private saveColonistToStorage(colonistId: string): void{
		window.localStorage.setItem(this.COLONIST_ID_KEY, colonistId);
	}

	private handleError(error: any): Promise<void>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}