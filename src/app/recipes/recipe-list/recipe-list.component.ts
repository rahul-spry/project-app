import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeData } from '../../shared/recipeData.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  providers: [RecipeData]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  
  constructor(private receipelist : RecipeData) {
    this.recipes = this.receipelist.loadRecipes();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
