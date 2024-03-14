import { Component } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
//* we can import tons of components from angular material
//? (in older versions, it's common to create a module where we import all of the components)

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatSliderModule, MatCardModule, MatButtonModule, MatBadgeModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent {

}
