import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-reactive-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule, //! must be included to use reactive forms
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    providers: [FirebaseService],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

    homeForm!: FormGroup

    constructor(private firebaseService: FirebaseService) {}

    //* a reactive form is one that has a basic html template, but it's handled by the TS
    ngOnInit(): void {
        this.homeForm = new FormGroup({ //? defining the form group (it's the form, a combination of controls)
            name: new FormControl(null, Validators.required),
            //* and I can add validators too (if multiple, add them in an array)
            email: new FormControl(null, [Validators.required, Validators.email]),
            color: new FormControl(),
            description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        })
    }

    onSubmit(){
        console.log(this.homeForm)
        this.firebaseService.addPlayer(
            {
                name: this.homeForm.value.name,
                email: this.homeForm.value.email,
                description: this.homeForm.value.description
            }
        ).subscribe(data => console.log("DB", data))
    }

    deletePlayer(){
        this.firebaseService.deletePlayer('-OC4HaI3LVVNf657mg0A') //! obviously make this dynamic
        .subscribe(data => {
            console.log(data)
        })
    }

    changePlayer(){
        this.firebaseService.patchPlayer('-OBkw2m8FQQGZdz0wmJW',
            { email: "sendou.shuto@blue-lock.jp"} //! obviously make this dynamic
        ).subscribe(data => {
            console.log("Patch", data)
        })
    }
}
