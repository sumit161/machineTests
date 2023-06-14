import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelfToggle]'
})
export class SelfToggleDirective {

  constructor(private eleRef : ElementRef) { }
  ngOnInit(): void {
  }

  @HostListener('click') onclick(){
    let Element = this.eleRef.nativeElement as HTMLInputElement;

    if(Element.className.includes('show')){
     Element.classList.remove("show")
    // this.istrue = ! this.istrue
    }
  }

}
