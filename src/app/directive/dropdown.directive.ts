import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

/*   @Input() property!: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // console.log(this.eleRef.nativeElement)
  }
  @HostListener('click') onclick() {
    var ParentEle = this.eleRef.nativeElement as HTMLElement;

    console.log(ParentEle.classList)
    if (ParentEle.className.includes(this.property)) {
      ParentEle.classList.remove(this.property);
      ParentEle.lastElementChild?.classList.remove(this.property);
    } else {
      ParentEle.classList.add(this.property);
      ParentEle.lastElementChild?.classList.add(this.property);
    }
  } */
  @Input() property! : string;
  istrue: boolean = false;
  constructor(private eleRef: ElementRef) {}
  ngOnInit(): void {}

  @HostListener('click') onclick() {
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


