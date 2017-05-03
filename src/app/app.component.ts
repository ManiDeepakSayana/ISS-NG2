import {
	Component, OnInit
}
from '@angular/core';
import {
	ISSService
}
from './iss.service';@
Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ISSService],
})
export class AppComponent implements OnInit {

	lat = 0;
	lng = 0;
	altitude = 0;
	velocity = 0;
	visibility = 0;
	issValue;
	id;
	constructor(private issService: ISSService) {}
	IssRunner(): void {
		var test = this;
		test.issService.getIssLoc()
			.subscribe(issData => {
					test.issValue = issData;
				},
				error => {}, () => { // when complete
					test.lat = test.issValue.latitude;
					test.lng = test.issValue.longitude;
					test.altitude = test.issValue.altitude;
					test.velocity = test.issValue.velocity;
					test.visibility = test.issValue.visibility;

				}


			);
	}
	ngOnInit(): void {
		this.IssRunner();
		this.id = setInterval(() => {
			this.IssRunner();
		}, 2000);
	}
}
