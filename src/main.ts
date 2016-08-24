import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app/app.routing.ts'

//won't use prod mode, but can keep
if (environment.production) {
  enableProdMode();
}

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	providers:[
		...HTTP_PROVIDERS,
		appRoutingProviders
	],
	declarations:[
		AppComponent,

	],
	exports:[ AppComponent ],
	bootstrap:[AppComponent],

})
export class AppModule{}

// bootstrap(AppComponent);

platformBrowserDynamic().bootstrapModule(AppModule);

