import { FoodServiceService } from '../Services/Food/food-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm :string ='';
  constructor(private activatedRoute:ActivatedRoute ,
              private router:Router , private foodService : FoodServiceService) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params =>
      {
        if(params?.['searchTerm'])
        this.searchTerm = params?.['searchTerm'];
      })

   
  }
  search():void{
    console.log()
        this.searchTerm ?  this.router.navigateByUrl(`/search/${this.foodService.getFoodType(this.searchTerm)}` ):
                           this.router.navigateByUrl('/home');
        

  }

}
