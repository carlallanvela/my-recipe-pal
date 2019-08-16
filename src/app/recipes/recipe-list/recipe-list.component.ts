import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes is a type of Recipe array
  // equivalent of Recipe[] recipes = {} in java
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://image.shutterstock.com/z/stock-photo-ingredients' +
    '-for-the-healthy-foods-selection-the-concept-of-healthy-' +
    'food-set-up-on-wooden-1439527229.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
    'https://image.shutterstock.com/z/' +
    'stock-photo-composition-of-dry-legumes-assortment-of-colorful' +
    '-legumes-in-bowls-lentils-moth-beans-mung-1446976247.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
