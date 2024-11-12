import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

//! Angular 17 new syntax, the class and its method are deprecated
//* now we only have arrow functions that check for a value that comes from a service

export const canActivateGuard: CanActivateFn = () => {
    return inject(AuthService).isAuthenticated()
};

export const canActivateChild: CanActivateChildFn = () => { //* with this we can allow or deny to show a child component
    return inject(AuthService).isUserAdmin()
}

