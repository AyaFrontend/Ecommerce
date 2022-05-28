import { Nutrient } from './../../Models/nutrient';
import { Food } from './../../Models/Food';
import { CartService } from './../../Services/Cart/cart.service';
import { Recipe } from './../../Models/Recipe';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../../Services/Food/food-service.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


declare let $ :any;

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  
  recipe!: Recipe;
  id!: number;
  food: Food = {};
  serveNum: number = 1 ;

  current: number = 1;
  perClick = 9;
  nutrients :Nutrient[] = []

 disabled : boolean = false ;
  constructor(private foodService: FoodServiceService ,
              private cartService : CartService,
              private activatedRoute : ActivatedRoute) { }
  
  ngOnInit(): void {
       
       this.activatedRoute.params.subscribe(params =>
        {
         if (params['id'])
         {
          
           this.id = params['id']
           this.foodService.getFoodDetailsById(params['id']).
             subscribe(res => {
               this.recipe = res;
              
               this.nutrients = this.recipe.nutrition.nutrients.slice(0,this.perClick)
             
             });
           
         }
         
            

        
        });
        
      document.documentElement.scrollTop=0;
         
      
        
  }

  AddToCart():void
  {
  
    this.food.id = this.recipe.id;
    this.food.image = this.recipe.image;
    this.food.price = this.recipe.pricePerServing;
    this.food.title = this.recipe.title;

    this.cartService.addItemAtCart(this.food! );
  }
 
  More():void{
    this.current = this.current + 1;
    if(this.perClick*this.current < this.recipe.nutrition.nutrients.length)
    {
    this.nutrients = this.recipe.nutrition.nutrients.slice(0,this.perClick * this.current)
    }
    else{
      this.nutrients = this.recipe.nutrition.nutrients.slice(0)
      this.disabled = true;
    }

  }
 
}
