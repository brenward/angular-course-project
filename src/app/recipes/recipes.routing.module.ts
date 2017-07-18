import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailEmptyComponent } from './recipe-detail-empty/recipe-detail-empty.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipesRoutes:Routes = [
    {path:'recipes',component:RecipesComponent, children:[
        {path:'',component:RecipeDetailEmptyComponent},
        {path:'new',component:RecipeEditComponent, canActivate:[AuthGuardService]},
        {path:':id',component:RecipeDetailComponent},        
        {path:':id/edit',component:RecipeEditComponent, canActivate:[AuthGuardService]}
    ]},
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule{}