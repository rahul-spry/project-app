import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';

@Injectable()
export class RecipeData {
  loadRecipes(): Recipe[] {
    return [
        {
            name: 'Chocolate Cake', 
            description: 'With milk chocolate', 
            imagePath: 'https://imgcdn.floweraura.com/Chocolate-Cake-Five-Star-A.jpg'
        },
        {
            name: 'Black Forest Cake', 
            description: 'With dark chocolate', 
            imagePath: 'https://cdn.shopify.com/s/files/1/1060/3816/products/rich-chocolate-truffle-cake_large.jpg?v=1594974441'
        }
    ];
  }

}