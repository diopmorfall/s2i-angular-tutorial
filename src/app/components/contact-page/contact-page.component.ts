import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ServizioProvaService } from '../../services/servizio-prova.service';
import { SingleContactComponent } from "../single-contact/single-contact.component";

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, SingleContactComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

    players: any;

    constructor(private servizioProva: ServizioProvaService){ }

    ngOnInit(): void {
        this.players = this.servizioProva.getPlayers()
        //this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
        //* this gets us the id from the current route we're navigating, 
        //console.log(this.route.snapshot.paramMap.get('id'), this.isProfile)
    }
}
