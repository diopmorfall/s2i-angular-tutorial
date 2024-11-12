import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService { //* basic example of authentication and routing guard
    //? we'll put here all the authentication logic
    isLoggedIn: boolean = true;
    isAdmin: boolean = true;

    constructor() { }

    isAuthenticated(): boolean {
        return this.isLoggedIn
    }

    isUserAdmin(){
        return this.isAdmin;
    }
}
