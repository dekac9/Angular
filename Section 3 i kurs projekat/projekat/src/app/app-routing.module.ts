import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LandingComponent } from "./landing/landing.component"
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component"
//import { RecepieItemComponent } from "./recepies/recepie-list/recepie-item/recepie-item.component"
import { RecepiesComponent } from "./recepies/recepies.component"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component"

const appRoutes:Routes=[
  {path:'', redirectTo:'/recepies', pathMatch:'full'},
  //{path:'recepies', component: RecepiesComponent},
  {path:'recepies', component: RecepiesComponent, children:[
   // {path:'id',component:RecepieItemComponent},
    {path:'', component:LandingComponent},
    {path:':id', component:RecepieDetailComponent}
  ]},
  {path:'shoppingList', component:ShoppingListComponent}
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})


export class AppRoutingModule{

}