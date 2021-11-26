import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
selector:'[appBasicOsvetli]'
})
export class BasicOsvetliDirektiva implements OnInit{
constructor(private elementRef:ElementRef){
  
}

ngOnInit(){
  this.elementRef.nativeElement.style.backgroundColor='blue'
}
}