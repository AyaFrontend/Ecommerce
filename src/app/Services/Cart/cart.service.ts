import { BehaviorSubject } from 'rxjs';
import { Food } from './../../Models/Food';
import { FoodServiceService } from './../Food/food-service.service';

import { Injectable } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';
import { CartItem } from 'src/app/Models/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

cartCounter  = new BehaviorSubject(0)
  private cart :Cart = new Cart();
  cartItems : CartItem[] =[];
  
  constructor( private foodService : FoodServiceService) { }
 
  addItemAtCart(recipe:Food)
  {
  
     let cartItem  = this.cart.items.find(item => item.recipe.id == recipe.id);
     
     if(cartItem)
      {
        return;
      }
      
      this.cart.items.push(new CartItem(recipe));
     
      let count =  this.cartCounter.getValue() + 1;
      this.cartCounter.next(count);

      localStorage.setItem('cart' ,JSON.stringify(this.cart.items));
     

 }

 getCartData(): Cart
 {
    this.cartItems =JSON.parse(localStorage.getItem('cart')!);
    this.cartCounter.next(this.cartItems.length);
    if(this.cartItems.length != 0 )
    {
        this.cart.items = this.cartItems;
        console.log(this.cartItems)
    }
  
     return this.cart;
 }

 

 changeQuantity(id : number , quantity : number):void
 {
   let item :CartItem = this.cart.items.find(item=>item.recipe.id == id)!;
   item.quantity = quantity;
   item.intiPrice = item.recipe.price! * quantity;

   localStorage.setItem('cart' ,JSON.stringify(this.cart.items));
 }

 removeFromCart(id : number) : void
 {
    this.cart.items = this.cart.items.filter(item => item.recipe.id != id);

    localStorage.setItem('cart' , JSON.stringify(this.cart.items));
 }
}
