import { environment } from './../../../environments/environment';

import { Food } from '../../Models/Food';
import { FoodType } from '../../Models/food-type';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseServer } from '../../Models/response-server';
import { Recipe } from '../../Models/Recipe';



@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  
 


  foods: FoodType[] = [FoodType.bread, FoodType.breakfast, FoodType.dessert,
  FoodType.drink, FoodType.main_course, FoodType.salad,
  FoodType.sauce,
  FoodType.side_dish, FoodType.snack, FoodType.soup];

  constructor(private _httpClient:HttpClient ) { }
  getFoods(foodType ='bread' , count : number = 1):Observable<ResponseServer<Food>>
  {
  
    
     return this._httpClient.get(`${environment.FOOD_BASE_URL}complexSearch?apiKey=${environment.APIKEY}&type=${foodType}&number=${count * 10 }`) as Observable<ResponseServer<Food>>;
  }

  getFoodType(searchKey : string): string
  {
    let fooType  = this.foods.find(food=> food.toLowerCase().includes(searchKey.toLowerCase())) ;
    return fooType? fooType :'bread';
  }

  getFoodDetailsById(id : number) : Observable<Recipe>
  {
     return this._httpClient.get(`${environment.FOOD_BASE_URL}${id}/information?includeNutrition=true&apiKey=${environment.APIKEY}`) as Observable<Recipe>
  }

  
}