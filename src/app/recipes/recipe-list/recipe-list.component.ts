import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService} from '../recipe.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesChangedSubscription:Subscription;

  constructor(private recipeService:RecipeService,private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activatedRoute});
  }

  ngOnDestroy(){
    this.recipesChangedSubscription.unsubscribe();
  }
}