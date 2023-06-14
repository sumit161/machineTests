import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavbarhideshow]'
})
export class NavbarhideshowDirective {

  @Input() NavBarClass! : string;
  istrue : boolean = false;
  constructor(private eleRef : ElementRef) { }
  ngOnInit(): void {
  }

  @HostListener('click') onclick(){
    this.istrue = ! this.istrue
    let Element = this.eleRef.nativeElement as HTMLInputElement;
    console.log(Element.classList)
    if(this.istrue){
     Element.nextElementSibling?.classList.remove(this.NavBarClass)
    }else{
      Element.nextElementSibling?.classList.add(this.NavBarClass)
    }
  }

}
