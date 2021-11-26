
import { 
  Directive, 
  Renderer2 ,
  OnInit, 
  ElementRef, 
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBoljeOsvetli]'
})
export class BoljeOsvetliDirective implements OnInit{

  @HostBinding('style.backgroundColor')backgroundColor:string='transparent'

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red', )
    
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink', )
this.backgroundColor='purple'
}
@HostListener('mouseleave') mouseleave(eventData: Event){
//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange', )
this.backgroundColor='transparent'
}
}

  


