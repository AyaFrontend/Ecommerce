import { Cart } from './../../../Models/Cart';
import { CartService } from './../../../Services/Cart/cart.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

declare let $ :any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  cartCounter : number=0 ;
  isLogin : boolean = false;
  
  constructor(private cartService: CartService , private auth : AuthService) {

        
   }

  ngOnInit(): void {
   

    this.auth.userData.subscribe(()=>
    {
      this.isLogin = this.auth.userData.getValue()!=null;
    
    });
   
    this.cartService.cartCounter.subscribe(()=>
    this.cartCounter = this.cartService.cartCounter.getValue())
    console.log(this.cartCounter)
  }

  Logout():void{

    this.auth.Logout();
 
  }


}
