import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recipes:boolean = true;
  shoppingList:boolean = false;

  displaySections(displayData:{recipeSection,shoppingListSection}){
    this.recipes = displayData.recipeSection;
    this.shoppingList = displayData.shoppingListSection;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBxIO8vE0A2MM356bw499ZeIyoyiISWM90",
      authDomain: "ng-recipe-book-de139.firebaseapp.com"
    });
  }
}
