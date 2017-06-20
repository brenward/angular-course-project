import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private shoppingListServiceSubscription: Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListServiceSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ingredientAdded(ingredient:Ingredient){
    this.shoppingListService.addIngredient(ingredient);
  }

  ngOnDestroy(){
    this.shoppingListServiceSubscription.unsubscribe();
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

}
