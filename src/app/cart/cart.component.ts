
import { CartService } from './../Services/Cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart! : Cart ;
  carts : Cart[] = [];

  constructor(private cartService :CartService) { }
  handler:any = null;
  ngOnInit(): void {
    this.loadStripe();
    this.cart = this.cartService.getCartData();
    this.carts = JSON.parse(localStorage.getItem('cart')!)
    
  }

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L0boMHqyKZsyf4by4AxEN2pPH1AuEuKpZ3mJU0PueBM5bObeyTCL9lEqpUDVoqYxNna1oeX4WQHx7YYTo2S85yN00Dx0BCRY4',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
  
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L0boMHqyKZsyf4by4AxEN2pPH1AuEuKpZ3mJU0PueBM5bObeyTCL9lEqpUDVoqYxNna1oeX4WQHx7YYTo2S85yN00Dx0BCRY4',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
  changeQuantity(id : number , val: number)
  {
      
      this.cartService.changeQuantity(id , val);

  }
 
  removeFromCart(id : number) : void
  {
    this.cartService.removeFromCart(id);
    let count =  this.cartService.cartCounter.getValue() - 1;
    this.cartService.cartCounter.next(count);
  }

 
}
