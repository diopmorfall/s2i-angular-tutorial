import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//* declaration of a custom directive
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private element: ElementRef) { }

  @Input() appHighlight = '' //* if we want to use the property binding on the directive,
  //* we must give the same name of the directive to the property we get in input
  //* the directive is the property itself
  @Input() defaultColor = ''
  //* but this second property can be named however we want

  //* we want to change the style of the element we're getting, by handling the mouse event
  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor(this.appHighlight || this.defaultColor || 'lime')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeColor('transparent')
  }

  changeColor(color: string){
    this.element.nativeElement.style.backgroundColor = color
  }
}
