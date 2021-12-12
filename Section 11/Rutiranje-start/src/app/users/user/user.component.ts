import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string}={id:0, name:'defaultName'};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // this.user={
    //   id:this.route.queryParams.subscribe( => {
    // this.user.id = params['id'];
    //   name:this.route.snapshot.paramMap['name']
    // }
    this.route.params.subscribe((user)=>{
      this.user.id=user.id;
      this.user.name=user.name
    })
    console.log(this.user);
   
  
  }

}
