import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from '../../Services/Food/food-service.service';
import { FoodType } from './../../Models/food-type';
import { Component, OnInit, Output } from '@angular/core';

declare let $ : any;
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  
  foods: FoodType[] = [FoodType.bread, FoodType.breakfast, FoodType.dessert,
  FoodType.drink, FoodType.main_course, FoodType.salad,
  FoodType.sauce,
  FoodType.side_dish, FoodType.snack, FoodType.soup];




  constructor() { }

  ngOnInit(): void {
 
  
  }
 
}
