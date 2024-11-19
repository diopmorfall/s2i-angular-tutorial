import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService { //* this service will be used for interacting with the backend
    //? if the app gets too big, you can break it down as much as you want

    constructor(private http: HttpClient) { }

    addPlayer(url: string, body: {}){
        return this.http.post(url, body)
    }

    getPlayer(url: string){
        return this.http.get(url)
    }
}
