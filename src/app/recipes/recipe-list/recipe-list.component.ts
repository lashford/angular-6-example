import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spag Bol',
      'a great recipe',
      'http://img.bestrecipes.com.au/g03m_i9O/h300-w400-cscale/br-api/asset/19191/healthy-chicken-spag-bol-deluxe-jpg.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
