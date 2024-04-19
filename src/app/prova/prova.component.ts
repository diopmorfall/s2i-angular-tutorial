import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
//* we can import tons of components from angular material
//? (in older versions, it's common to create a module where we import all of the components)

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatSliderModule, MatCardModule, MatButtonModule, MatBadgeModule, CommonModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent
  implements OnInit, AfterViewInit, DoCheck, AfterContentInit, AfterContentInit,
  AfterContentChecked, AfterViewChecked, OnDestroy, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges runs whenever there are changes in the component", changes)
  }

  //* with the lifecycle hooks, we can perform some actions during the loading of the components

  cats = [
    {
      name: 'pawpaw',
      breed: 'sorian',
      desc: `Il gatto soriano è il Gatto per antonomasia, quello che tutti immaginiamo quando
        pensiamo a un micio. Si tratta dei comunissimi meticci, cioè esemplari senza alcun pedigree
        e impossibili da classificare in una specifica razza`
    },
    {
      name: 'tiger',
      breed: 'abyssinian',
      desc: `Abyssinian, breed of domestic cat, probably of Egyptian origin, that has been considered
        to approximate the sacred cat of ancient Egypt more closely than any other living cat. The
        Abyssinian is a lithe cat with relatively slender legs and a long, tapering tail.`
    },
    {
      name: 'lex',
      breed: 'european shorthair',
      desc: `European Shorthair Cat personality. One of the European Shorthair's most favorable
        qualities is her ability to adapt quickly to new environments, making her an ideal pet for
        households with small children and seniors, as well as with other cats, dogs and various pets.`
    },
  ]

  @Input() data: any = [] //* input decorator to receive data from a parent component
}
