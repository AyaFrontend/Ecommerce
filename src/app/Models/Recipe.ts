import { FoodType } from './food-type';
import { Base } from "./base";
import { Nutrient } from './nutrient';
import { Ingredient } from './ingredient';
import { Nutrition } from './Nutrition';

export interface Recipe extends Base {
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    summary: string ;
    instructions:string;
    dishTypes:FoodType[];
    nutrition:Nutrition;
    extendedIngredients:Ingredient[];

}