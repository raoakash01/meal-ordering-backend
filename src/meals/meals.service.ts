import { Injectable } from '@nestjs/common';
import * as mealsData from '../data/meals.json';

@Injectable()
export class MealsService {
  private meals = mealsData.meals;

  findAll() {
    return [...this.meals]; // create a copy of the array to prevent mutation
  }
}

