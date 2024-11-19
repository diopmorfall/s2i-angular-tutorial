import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ServizioProvaService } from '../../services/servizio-prova.service';
import { SingleContactComponent } from "../single-contact/single-contact.component";
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, SingleContactComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

    players: any;

    constructor(private firebaseService: FirebaseService){ }

    ngOnInit(): void {
        //this.players = this.servizioProva.getPlayers()
        //this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
        //* this gets us the id from the current route we're navigating, 
        //console.log(this.route.snapshot.paramMap.get('id'), this.isProfile)

        //! obviously the url should only stay in the service, there's no need to copy it everywhere
        this.players = this.firebaseService.getPlayer('https://s2i-angular-tutorial-default-rtdb.asia-southeast1.firebasedatabase.app/players.json')
            .subscribe((data: any) => {
                console.log("Pre", data)
                //* we need to remap the object we receive in an array of objects, in order to display it properly
                this.players = Object.keys(data).map(key => { return data[key]})
                console.log("Post", this.players)
            })
    }
}
