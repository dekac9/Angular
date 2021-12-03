import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective implements OnInit {
@HostBinding('class.show') otvoreno=false
temp
temp2:boolean=false
constructor(private elementRef:ElementRef){

}


@HostListener('click',['$event']) togluj(){
this.temp=this.elementRef.nativeElement.nextElementSibling
//  this.temp2=this.elementRef.nativeElement.contains(event.target)
// console.log(this.temp2);
if(this.temp.className=="dropdown-menu"){
this.temp.className="dropdown-menu show"
}
else if (this.temp.className=="dropdown-menu show" && this.temp2) {
this.temp.className=="dropdown-menu"


} 
else{
this.temp.className="dropdown-menu"

}
}
// @HostListener('click', ['$event']) any(){
// this.temp2=this.elementRef.nativeElement.contains(event.target)
// if(this.temp!=false){
// this.temp.className="dropdown-menu"
// }else{
// this.temp.className="dropdown-menu"
// }
// console.log(this.temp);
// }

ngOnInit(){
// this.temp=this.elementRef.nativeElement.parentNode
// console.log(this.temp);
}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}

  

}


