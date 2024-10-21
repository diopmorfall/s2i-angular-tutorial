import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ServizioProvaService } from '../../services/servizio-prova.service';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

    players: any;
    player: any;
    isProfile!: boolean;

    constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute ){ }

    ngOnInit(): void {
        this.players = this.servizioProva.getPlayers()
        //this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
        //* this gets us the id from the current route we're navigating, 
        //console.log(this.route.snapshot.paramMap.get('id'), this.isProfile)
        let id = this.route.snapshot.paramMap.get('id')
        if(id){
            this.isProfile = true
            this.player = this.servizioProva.getPlayer(parseInt(id)!)
        } else {
            this.isProfile = false
            this.players = this.servizioProva.getPlayers()
        }
    }
}
