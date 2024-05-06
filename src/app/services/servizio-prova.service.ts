import { Injectable } from '@angular/core';
//* this allows us to inject our service in any component (since it's provided in root)
//! remember to import it in the components where you're going to use it
@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  constructor() { }

  players = [
    { name: 'Yoichi', surname: 'Isagi', isPlaying: true, color: 'lime' },
    { name: 'Rin', surname: 'Itoshi', isPlaying: true, color: 'aquamarine' },
    { name: 'Shoei', surname: 'Barou', isPlaying: false, color: 'red' },
    { name: 'Ryusei', surname: 'Shidou', isPlaying: true, color: 'purple' },
    { name: 'Oliver', surname: 'Aiku', isPlaying: false, color: 'green' },
  ]

  getPlayers(){
    return this.players
  }
}
