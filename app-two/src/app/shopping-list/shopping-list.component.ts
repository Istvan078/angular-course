import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
ingredients: Ingridient[] = [
  new Ingridient("Almák", 5),
  new Ingridient("Paradicsomok", 10)
];
}
