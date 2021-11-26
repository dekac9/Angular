import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSuprotno]'
})
export class SuprotnoDirective {
@Input() set appSuprotno(vrednost:boolean){
if(!vrednost){
this.vcRef.createEmbeddedView(this.templateRef)
}else{
this.vcRef.clear()
}

}
  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

}
