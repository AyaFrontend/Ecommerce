
import { Food } from './Food';


export class CartItem
{
    constructor(recipe : Food )
    {
        this.recipe = recipe;
        this.intiPrice = this.recipe?.price! * this.quantity;
    }
   
    recipe: Food ;
    quantity : number = 1;

    intiPrice : number ;
 

}
