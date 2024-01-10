import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {routes}  from './app/app-routing.module'

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]});
