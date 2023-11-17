import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

@ViewChild("nameInput", {
  static: false
})  nameInputRef: ElementRef
@ViewChild("amountInput", {
  static: false
})  amountInputRef: ElementRef
@Output() ingridientAdded = new EventEmitter<Ingridient>();
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingridient(ingName,ingAmount);
    this.ingridientAdded.emit(newIngredient);
  }
}
