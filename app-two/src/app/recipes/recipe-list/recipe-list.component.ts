import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Egy teszt recept", "Ez egy teszt", "https://img.freepik.com/free-photo/top-view-food-ingredients-with-veggies-notebook_23-2148834722.jpg?w=900&t=st=1700123592~exp=1700124192~hmac=b39072222cafb08aafe3d290b84741bd92b6dab13cc504e015f91ee5f9c13075"),
    new Recipe("Egy másik teszt recept", "Ez egy teszt", "https://img.freepik.com/free-photo/top-view-food-ingredients-with-veggies-notebook_23-2148834722.jpg?w=900&t=st=1700123592~exp=1700124192~hmac=b39072222cafb08aafe3d290b84741bd92b6dab13cc504e015f91ee5f9c13075")
  ];


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
