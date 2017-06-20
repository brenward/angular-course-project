import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm:NgForm; 
  startedEditing:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.startedEditing = this.shoppingListService.startedEditing.subscribe(
      (index:number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }
    );
  }

  addIngredient(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){
    this.startedEditing.unsubscribe()
  }

  onClear(){
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete(){
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.editMode = false;
    this.shoppingListForm.reset();
  }


}
