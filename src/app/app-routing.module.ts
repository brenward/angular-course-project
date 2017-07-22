import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HeaderComponent } from './core/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeDetailEmptyComponent } from './recipes/recipe-detail-empty/recipe-detail-empty.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
    {path:'shopping-list',component:ShoppingListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}