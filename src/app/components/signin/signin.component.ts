import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.css'
})
export class SigninComponent {

    constructor(private authService: AuthService){ }

    onSubmit(form: NgForm){
        const email = form.value.email
        const password = form.value.password
        console.log("Signin", email, password)
        this.authService.signin(
            email,
            password,
        ).subscribe((data: any) => { //* and here we save it into the localStorage
            console.log("Login", data)
            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
            //? properly setting the expiration date
            this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
            console.log("User here", this.authService.user)
            localStorage.setItem("user", JSON.stringify(this.authService.user))
        })
        
        form.reset()
    }
}
