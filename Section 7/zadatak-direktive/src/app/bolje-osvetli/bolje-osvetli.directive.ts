
import { 
  Directive, 
  Renderer2 ,
  OnInit, 
  ElementRef, 
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBoljeOsvetli]'
})
export class BoljeOsvetliDirective implements OnInit{
brojac:number=0
@Input()defaultColor='transparent'
@Input()novaBoja='brown'
  @HostBinding('style.backgroundColor')backgroundColor:string

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red', )
    this.backgroundColor=this.defaultColor
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink', )
this.backgroundColor='purple'
this.brojac++
console.log(this.brojac);
}
@HostListener('mouseleave') mouseleave(eventData: Event){
//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange', )
this.backgroundColor='transparent'
}
}

  


