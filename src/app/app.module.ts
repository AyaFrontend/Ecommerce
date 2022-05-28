import { PaginationModule } from './Pagination/pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Helper/Nav/nav-bar/nav-bar.component';
import { SliderComponent } from './Helper/Slider/slider/slider.component';
import { FoodListComponent } from './Food/food-list/food-list.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './Tag/tag/tag.component';
import { FoodDetailsComponent } from './FoodDetails/food-details/food-details.component';

import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { PaginationComponent } from './Pagination/pagination/pagination.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { LoaderComponent } from './Helper/loader/loader.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { FooterComponent } from './Helper/Footer/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    FoodListComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodDetailsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    PaginationComponent,
    NotFoundComponent,
    LoaderComponent,
    FooterComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
