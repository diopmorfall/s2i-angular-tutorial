import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService { //* this service will be used for interacting with the backend
    //? if the app gets too big, you can break it down as much as you want
    url: string = 'https://s2i-angular-tutorial-default-rtdb.asia-southeast1.firebasedatabase.app/players'

    constructor(private http: HttpClient) { }

    addPlayer(body: {}){
        return this.http.post(`${this.url}.json`, body)
    }

    getPlayers(){
        return this.http.get(`${this.url}.json`)
    }

    getPlayer(id: string){
        return this.http.get(`${this.url}/${id}.json`)
    }

    deletePlayer(id: string){
        console.log("URL", `${this.url}/${id}.json`)
        return this.http.delete(`${this.url}/${id}.json`)
    }


}
