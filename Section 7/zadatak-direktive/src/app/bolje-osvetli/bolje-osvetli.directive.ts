
import { Directive, Renderer2 ,OnInit, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBoljeOsvetli]'
})
export class BoljeOsvetliDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red', )
    
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink', )
}
@HostListener('mouseleave') mouseleave(eventData: Event){
this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange', )
}
}

  


