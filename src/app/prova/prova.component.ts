import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

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
export class ProvaComponent implements OnInit, AfterViewInit, DoCheck, AfterContentInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  constructor(){
    console.log('constructor building the single component')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck, repeats some checks to look for changes')
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked, runs after that the view is checked (text + components)');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit, runs after that the view is initialized (text + components)');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit, runs after that the content of the component is initialized (text)');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked, runs after that the content of the component is checked (text');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy, runs when the component is destroyed (for example, we render another one)');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit, runs when the component is initialized')
  }

  //* with the lifecycle hooks, we can perform some actions during the loading of the components
}
