import { Food } from './../Models/Food';
import { FoodServiceService } from '../Services/Food/food-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


declare let $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  , OnDestroy{
  current :number =1;
  
  perPage:number = 10;

  foods :Food[] = [];
  totalPages! : number ;
  searchTerm : string ='';
  count :number =1;

  subscribe! :Subscription;
  constructor(private foodService:FoodServiceService , private router:ActivatedRoute) { 

  }
  ngOnDestroy(): void {
    if(this.subscribe)
    this.subscribe.unsubscribe();
  }
  
  ngOnInit(): void {
   
     
    this.subscribe =  this.router.params.subscribe(params =>
    {
      if(params?.['searchTerm'])
      {
       this.foodService.getFoods(this.foodService.getFoodType(params?.['searchTerm'])).
        subscribe(res =>
        {
          
           this.foods = res.results;
           this.totalPages  = Math.ceil(res.totalResults / this.perPage);
           console.log(res)
        });
      }
      else if (params?.['tagName'])
      {
        
        this.foodService.getFoods(params?.['tagName']).
        subscribe(res=>
        {
          
          this.foods = res.results;
          this.totalPages  = Math.ceil(res.totalResults / this.perPage);
          console.log(res)
        });
      }
      else{
        this.foodService.getFoods('bread').
        subscribe(res=>
        {
         
          this.foods = res.results;
    
          this.totalPages  = Math.ceil(res.totalResults / this.perPage);
          console.log(res)
        });
      }
    });
    
   document.documentElement.scrollTop =0;
  }
  onNext(num : number){
  
   this.current = num +1;
 
   this.Paginate(this.current, this.perPage)
  


  }

  onPrevious(num :number){
    this.current = num - 1;
    this.Paginate(this.current, this.perPage)
   
  }

  onGoTo(page : number)
  {
    this.current = page;
    this.Paginate(this.current, this.perPage)
  }
  
  public Paginate(current:number , perPage:number )
  {
    let searchKey : string = this.router.snapshot.params['tagName']?
    this.router.snapshot.params['tagName'] : this.router.snapshot.params['searchTerm']



    this.foodService.getFoods(searchKey, current).subscribe(
      res=>
      {
        this.foods = res.results.slice((current -1) * perPage).slice(0,perPage);
        this.totalPages = Math.ceil(res.totalResults / perPage)
      }
    )
   
    document.documentElement.scrollTop = 935
   
  }


}