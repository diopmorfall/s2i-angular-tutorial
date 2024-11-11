import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SingleContactComponent } from './components/single-contact/single-contact.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    //* this is a route with params, we can use it to load a component for a specific set of data
    { path: 'contacts', component: ContactPageComponent,
        children: [
            { path: ':id', component: SingleContactComponent }, //* child route, its base is /contacts
        ] 
    },
];
