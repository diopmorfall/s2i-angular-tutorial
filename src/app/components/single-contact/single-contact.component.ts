import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ServizioProvaService } from '../../services/servizio-prova.service';

@Component({
    selector: 'app-single-contact',
    standalone: true,
    imports: [],
    templateUrl: './single-contact.component.html',
    styleUrl: './single-contact.component.css'
})
export class SingleContactComponent implements OnInit {

    constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService){ }

    id!: number | any; //! needs to be fixed because id it's just a number, but params may be null
    player: any;

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id')
            this.player = this.servizioProva.getPlayer(+this.id)
        })
    }
}
