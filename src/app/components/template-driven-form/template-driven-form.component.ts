import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-template-driven-form',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    templateUrl: './template-driven-form.component.html',
    styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

    //@ViewChild('homeForm') homeForm!: NgForm
    //* I can also access the form like this

    onSumbit(form: any){
        console.log("Sumbit", form)
    }
}
