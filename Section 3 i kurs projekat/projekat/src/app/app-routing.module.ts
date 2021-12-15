import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RecepiesComponent } from "./recepies/recepies.component"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component"

const appRoutes:Routes=[
  {path:'', redirectTo:'/recepies', pathMatch:'full'},
  {path:'recepies', component: RecepiesComponent},
  {path:'shoppingList', component:ShoppingListComponent}
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})


export class AppRoutingModule{

}