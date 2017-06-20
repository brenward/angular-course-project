import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() recipeIndex:number;
  constructor(private recipeService:RecipeService, private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  // itemSelected(){
  //   //this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate([this.recipeIndex],{relativeTo: this.activatedRoute});

  // }
}
