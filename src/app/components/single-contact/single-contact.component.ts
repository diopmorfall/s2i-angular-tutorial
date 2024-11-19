import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ServizioProvaService } from '../../services/servizio-prova.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-single-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './single-contact.component.html',
    styleUrl: './single-contact.component.css'
})
export class SingleContactComponent implements OnInit {

    constructor(private route: ActivatedRoute, private firebaseService: FirebaseService){ }

    id!: any; //! needs to be fixed because id it's just a number, but params may be null (now a string)
    player: any;

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => { //* subscribing to all the changes
            this.id = params.get('id')
            this.player = this.firebaseService.getPlayer(this.id)
            .subscribe(data => this.player = data)
        })
    }
}
