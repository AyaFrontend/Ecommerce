import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { FoodDetailsComponent } from './FoodDetails/food-details/food-details.component';
import { FoodListComponent } from './Food/food-list/food-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path :'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'search/:searchTerm' , component:HomeComponent},
  {path:'tag/:tagName' , component:HomeComponent},
  {path:'details/:id' , component:FoodDetailsComponent , canActivate:[AuthGuard]},
  {path:'details/:id/:query' , component:FoodDetailsComponent, canActivate:[AuthGuard]},
  {path:'cart' , component:CartComponent , canActivate:[AuthGuard]},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
