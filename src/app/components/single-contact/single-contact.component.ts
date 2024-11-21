import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-single-contact',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './single-contact.component.html',
    styleUrl: './single-contact.component.css'
})
export class SingleContactComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private router: Router
    ){ }

    id!: any;
    player: any;
    contactForm!: FormGroup

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => { //* subscribing to all the changes
            this.id = params.get('id')
            this.player = this.firebaseService.getPlayer(this.id)
            .subscribe(data => this.player = data)
        })

        this.contactForm = new FormGroup({
            name: new FormControl(this.player.name),
            email: new FormControl(this.player.email, Validators.email),
            description: new FormControl(this.player.description, Validators.minLength(10)),
        })
    }

    onSubmit(){
        let body = {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            description: this.contactForm.value.description,
        }

        let filteredBody = Object.fromEntries(
            Object.entries(body).filter(([key, value]) => value !== null)
        )

        //console.log("Only changed", filteredBody)
        this.firebaseService.patchPlayer(this.id, filteredBody)
        .subscribe(data => console.log(data))
        this.router.navigateByUrl('/contacts')
    }
    

    deletePlayer(){
        this.firebaseService.deletePlayer(this.id)
        .subscribe(data => {
            console.log(data)
        })
        this.router.navigateByUrl('/contacts')
    }
}
