import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ProvaComponent } from './prova/prova.component';
//* in v17 you need to import the components you need
//* unlike the older versions where you add them in app.module.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvaComponent, MatButtonModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isDisabled = false;

  ngOnInit(): void {
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000)


  }
  title = 's2i-angular-tutorial';
  url1 = 'https://tse1.mm.bing.net/th?id=OIP.t5B55ZEKRYJ9nzL77VDgIwHaKT&pid=Api'
  url2 = 'https://tse2.mm.bing.net/th?id=OIP.UQ8B1FpdkDbR42AVhdAZXgHaLE&pid=Api'

  onClick(e: any){
    console.log('CLIC', e)
  }

  onInput(e: Event){ //* here we're getting the details of the event, including the data we need
    console.log('Input', (<HTMLInputElement>e.target).value)
  }
}
