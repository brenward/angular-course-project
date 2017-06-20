import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') display:boolean = false;
  constructor() { }

  @HostListener('click') toggleDropdown(){
    this.display = !this.display
  }

}
