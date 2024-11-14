import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-reactive-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule, //! must be included
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

    homeForm!: FormGroup

    //* a reactive form is one that has a basic html template, but it's handled by the TS
    ngOnInit(): void {
        this.homeForm = new FormGroup({ //? defining the form group (it's the form, a combination of controls)
            name: new FormControl(null, Validators.required),
            //* and I can add validators too (if multiple, add them in an array)
            email: new FormControl(null, [Validators.required, Validators.email]),
            color: new FormControl(),
        })
    }

    onSubmit(){
        console.log(this.homeForm)
    }
}
