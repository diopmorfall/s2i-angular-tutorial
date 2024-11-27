import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService { //* basic example of authentication and routing guard
    //? we'll put here all the authentication logic
    isLoggedIn: boolean = true;
    isAdmin: boolean = true;
    apiKey = 'AIzaSyC29vazoX0r0RYwFepbIbiyzPH2D48EhxA'
    signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`
    signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`
    user!: User | any

    constructor(private http: HttpClient) { }

    isAuthenticated(): boolean {
        return this.isLoggedIn
    }

    isUserAdmin(){
        return this.isAdmin;
    }

    signup(email: string, password: string){
        return this.http.post(this.signUpUrl, { email, password, returnSecureToken: true })
    }

    signin(email: string, password: string){
        return this.http.post(this.signInUrl, { email, password, returnSecureToken: true })
    }

    createUser(email: string, id: string, token: string, expirationDate: Date){
        this.user = new User(email, id, token, expirationDate)
        this.isLoggedIn = true
    }

    logout(){
        this.isLoggedIn = false;
        this.user = null;
        localStorage.removeItem('user')
    }
}
