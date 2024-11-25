import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SingleContactComponent } from './components/single-contact/single-contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { canActivateChild, canActivateGuard } from './auth/auth.guard';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' }, //? same type of redirect, but to a different path
    //* also with pathmatch we make sure that only the empty path will be redirected to the home page
    { path: 'home', component: HomePageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'about', component: AboutPageComponent },
    //* this is a route with params, we can use it to load a component for a specific set of data
    { path: 'contacts', canActivate: [canActivateGuard], canActivateChild: [canActivateChild],
        //* this component will be accessible only if the defined guards both return true
        component: ContactPageComponent,
        children: [
            { path: ':id', component: SingleContactComponent }, //? child route, its base is /contacts
        ] 
    },
    { path: 'tform', component: TemplateDrivenFormComponent },
    { path: 'rform', component: ReactiveFormComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' } //* this allows us to redirect every wrong route to a specific path
    //! remember that it has to be the last route you define here
];
