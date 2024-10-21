import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contacts', component: ContactPageComponent },
    { path: 'contacts/:id', component: ContactPageComponent },
    //* this is a route with params, we can use it to load a component for a specific set of data
];
