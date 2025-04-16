import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {
  myForm: FormGroup;
  element = 0;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      items: this.fb.array([])
    });
  }

  get items(): FormArray {
    return this.myForm.get('items') as FormArray;
  }

  addItem() {
    const itemForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.items.push(itemForm);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    for (let index = 0; index < this.items.length; index++) {
      this.element += Number(this.myForm.value.items[index].quantity);
    }
    console.log(this.element);
    console.log(this.myForm.value);
  }
}
