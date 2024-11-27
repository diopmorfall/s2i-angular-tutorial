import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';

import { ProvaComponent } from './prova/prova.component';

import { HighlightDirective } from './directives/highlight.directive';
import { ServizioProvaService } from './services/servizio-prova.service';
import { AuthService } from './auth/auth.service';
//* in v17 you need to import the components you need
//* unlike the older versions where you add them in app.module.ts
//? FormsModule is needed to use ngModel with input elements and two way binding
//? CommonModule is needed to use structural directives

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        FormsModule,
        ProvaComponent, 
        MatButtonModule,
        MatInputModule,
        CommonModule,
        HighlightDirective,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
    constructor(private servizioProvaService: ServizioProvaService, private authService: AuthService){ }
    //* this is where we inject the services
    isDisabled = false;

    ngOnInit(): void {
        //setInterval(() => {
            //this.isDisabled = !this.isDisabled;
        //}, 2000)

        //console.log("Anime name: ", this.inputValue)
        //console.log("Players service", this.servizioProvaService.getPlayers())

        // interval(1000).subscribe(n => console.log("Observable", n))
        new Observable(observer => {
            let count = 0;
            setInterval(() => {
                observer.next(count)
                count++;
            }, 1000) //* this is the line that asslow us to stay updated on the latest values
        })

        if(localStorage.getItem('user')){
            const user = JSON.parse(localStorage.getItem('user')!)
            this.authService.createUser(user.email, user.id, user._token, user._expirationDate)
        }
    }
    title = 'Angular tutorial by start2impact University';
    url1 = 'https://tse1.mm.bing.net/th?id=OIP.t5B55ZEKRYJ9nzL77VDgIwHaKT&pid=Api'
    url2 = 'https://tse2.mm.bing.net/th?id=OIP.UQ8B1FpdkDbR42AVhdAZXgHaLE&pid=Api'

    onClick(e: any){
        console.log('CLIC', e)
    }

    onInput(e: Event){ //* here we're getting the details of the event, including the data we need
        //console.log('Input', (<HTMLInputElement>e.target).value)
        this.title = (<HTMLInputElement>e.target).value
        //* with this, we can change a value and see it updated right away
    }

    onClickBinding(e: Event){
        this.title = 'clicked here'
    }

    isVisible = true
    players = this.servizioProvaService.getPlayers()
    value = 1;
    songTitle = 'Madada'

    changePlayers(){
        this.players = [
        { name: 'Tabito', surname: 'Karasu', isPlaying: true, color: 'purple' },
        { name: 'Hyoma', surname: 'Chigiri', isPlaying: true, color: 'magenta' },
        { name: 'Niko', surname: 'Ikki', isPlaying: false, color: 'aqua' },
        { name: 'Reji', surname: 'Hiiragi', isPlaying: false, color: 'pink' },
        { name: 'Lorenzo', surname: 'Don', isPlaying: false, color: 'grey' },
        ]
    }

    receivedName = ''
    receiveData(value: any){
        this.receivedName = value
    }

    @ViewChild('animeName') inputValue!: ElementRef<HTMLInputElement>
    //* this tells us that there's this element inside the component view that we can access to
    //* since it's an ElementRef, it may be null or undefined; with ! we assure that it'll always have a value
    //* otherwise, we must give it a value
    //* using the any type we won't have the nativeElement object, that represents the element we're taking
    //* we can also be even more specific by adding the type of the element we're handling

    //! also, the value will only be accessible once the view is initialized
    ngAfterViewInit(): void {
        console.log("Anime name: ", this.inputValue)
    }

    showName(){
        console.log("Show: ", this.inputValue.nativeElement.value)
    }

    color = '';
    changeHighlightColor(color: string){
        this.color = color;
    }

    today = Date.now()
    number = 7.5

    onLogout(){
        this.authService.logout()
    }
}
