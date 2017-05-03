import {
	Injectable
}
from '@angular/core';
import {
	Headers, Http
}
from '@angular/http';


@
Injectable()
export class ISSService {

	private issUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
	constructor(private http: Http) {}

	getIssLoc() {
		return this.http.get(this.issUrl)
			.map(response => response.json())
			.catch(this.handleError);

	}
	private handleError(error: any): any {
		console.error('An error occurred', error); // for demo purposes only
	}

}
