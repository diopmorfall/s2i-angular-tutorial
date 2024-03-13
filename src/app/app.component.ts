import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProvaComponent } from './prova/prova.component';
//* in v17 you need to import the components you need
//* unlike the versions that have the app.module.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 's2i-angular-tutorial';
}
