import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes.routing.module';
import { RecipeDetailEmptyComponent } from './recipe-detail-empty/recipe-detail-empty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './../shared/dropdown.directive';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeDetailEmptyComponent,
        RecipeItemComponent
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{}