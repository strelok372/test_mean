import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[bold]'
})
export class MystyleDirective {
  constructor(private elementref: ElementRef) {
    this.elementref.nativeElement.style.fontWeight = "bold";
  }
}
