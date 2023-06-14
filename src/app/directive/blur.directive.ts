import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective {

  constructor(private eleRef: ElementRef) {}
  ngOnInit(): void {
    console.log("blur");

  }

 /*  @HostListener('blur') onclick() {
    let Element = this.eleRef.nativeElement as HTMLElement;
    console.log(Element);

    // let m = Element.classList;
    if (Element.className.includes('show')) {
      Element.classList.remove('show');
      // this.istrue = ! this.istrue
    } else {
      Element.classList.add('show');
      // this.istrue = ! this.istrue
    }
  } */

  @HostListener('blur') onclick() {
    let Element = this.eleRef.nativeElement as HTMLInputElement;
    console.log(Element);

    let m = Element.classList;
    if (Element.nextElementSibling?.className.includes('show')) {
      Element.nextElementSibling?.classList.remove('show');
      // this.istrue = ! this.istrue
    } else {
      Element.nextElementSibling?.classList.add('show');
      // this.istrue = ! this.istrue
    }
  }

}
