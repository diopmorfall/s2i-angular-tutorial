import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService { //* this service will be used for interacting with the backend
    //? if the app gets too big, you can break it down as much as you want
    url: string = 'https://s2i-angular-tutorial-default-rtdb.asia-southeast1.firebasedatabase.app/players'

    constructor(private http: HttpClient, private authService: AuthService) { }

    addPlayer(body: {}){
        return this.http.post(`${this.url}.json`, body)
    }

    getPlayers(){
        return this.http.get(`${this.url}.json?auth=${this.authService.user.token}`)
        //* with the token, only the authenticated users can access that content
    }

    getPlayer(id: string){
        return this.http.get(`${this.url}/${id}.json`)
    }

    deletePlayer(id: string){
        console.log("URL", `${this.url}/${id}.json`)
        return this.http.delete(`${this.url}/${id}.json`)
    }

    patchPlayer(id: string, body: {}){
        return this.http.patch(`${this.url}/${id}.json`, body)
    }
    //* we use patch because we're changing only a part of the entity in the database
    //* if we want to change it all, we should use the put method
    //! do not use put to change only a part of the entity, because it'll replace everything with it
}
