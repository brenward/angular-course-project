import { AuthGuardService } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
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
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent, children:[
        {path:'',component:RecipeDetailEmptyComponent},
        {path:'new',component:RecipeEditComponent, canActivate:[AuthGuardService]},
        {path:':id',component:RecipeDetailComponent},        
        {path:':id/edit',component:RecipeEditComponent, canActivate:[AuthGuardService]}
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
     {path:'signup',component:SignupComponent},
     {path:'signin',component:SigninComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}