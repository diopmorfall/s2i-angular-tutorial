import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService { //* basic example of authentication and routing guard
    //? we'll put here all the authentication logic
    isLoggedIn: boolean = true;
    isAdmin: boolean = true;
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC29vazoX0r0RYwFepbIbiyzPH2D48EhxA'

    constructor(private http: HttpClient) { }

    isAuthenticated(): boolean {
        return this.isLoggedIn
    }

    isUserAdmin(){
        return this.isAdmin;
    }

    signup(body: {}){
        return this.http.post(this.url, body)
    }
}
