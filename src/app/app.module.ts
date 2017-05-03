import {
	BrowserModule
}
from '@angular/platform-browser';
import {
	NgModule
}
from '@angular/core';
import {
	MaterialModule
}
from '@angular/material';
import {
	FormsModule
}
from '@angular/forms';
import {
	CommonModule
}
from '@angular/common';

import {
	HttpModule
}
from '@angular/http';
import {
	BrowserAnimationsModule
}
from '@angular/platform-browser/animations';
import {
	MdButtonModule, MdCheckboxModule
}
from '@angular/material';

import {
	AppComponent
}
from './app.component';

import {
	AgmCoreModule
}
from 'angular2-google-maps/core';
import {
	ISSService
}
from './iss.service';@
NgModule({
	declarations: [
    AppComponent
  ],
	imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	CommonModule,
    MaterialModule.forRoot(),
	BrowserAnimationsModule,
	MdButtonModule,
	MdCheckboxModule,
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyBC2Rn0KCgUa3QVCff1LxwneCBeYz9MNVI'
		})
  ],
	providers: [ISSService],
	bootstrap: [AppComponent]
})
export class AppModule {}
