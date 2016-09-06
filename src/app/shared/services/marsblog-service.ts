import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
// import { IMarsblog } from '../models';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarsblogService{
	
	marsblogUrl = 'http://fourth.acdemy.red/wp-json/wp/v2/posts';
	
	constructor(private http: Http){

	}

	getMarsblog(): Promise<any> {
		return this.http.get(this.marsblogUrl)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<void>{
		console.error('An error occurred', error);

		const message: string = 'Sorry the Blog is unavailable at this time. Please check back at a later time';

		return Promise.reject(message);
	}

}