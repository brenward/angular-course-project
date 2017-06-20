import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService{
    //recipeSelected = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
    new Recipe('Test Recipe 1','This is a test','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1280px-Banjo_Shark_recipe.jpg',[
        new Ingredient('Meat',1),
        new Ingredient('Chips',25)
    ]),
    new Recipe('Test Recipe 2','This is a test','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1280px-Banjo_Shark_recipe.jpg',[
        new Ingredient('Meat',1),
        new Ingredient('bread',2)
    ])
  ];
  constructor(private shoppingListService:ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(id:number){
      return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    /*ingredients.forEach(
        (ingredient) => {
            this.shoppingListService.addIngredient(ingredient);
        }
    );*/
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,recipe:Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}