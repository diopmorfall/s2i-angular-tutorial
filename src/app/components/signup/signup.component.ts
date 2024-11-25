import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent {

    constructor(private authService: AuthService){ }

    signupForm!: FormGroup;

    onSubmit(form: NgForm){
        const email = form.value.email
        const password = form.value.password
        console.log("Signup", email, password)
        this.authService.signup({
            email,
            password,
            returnSecureToken: true
        }).subscribe(data => { console.log(data) })
        
        form.reset()
    }
}
