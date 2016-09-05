import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { IMarsblog } from '../models';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarsblogService{
	
	marsblogUrl = 'http://fourth.academy.red/wp-json/wp/v2/posts';
	
	constructor(private http: Http){

	}
	getMarsblog(): Promise<IMarsblog[]>{
		return this.http.get(this.marsblogUrl)
					.toPromise()
					.then(response => response.json().posts)
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<void>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}