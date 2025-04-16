import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isSubmit: boolean = false;
  studentInfo: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl(),
    isActive: new FormControl()
  })

  constructor(private dataService: DataService) { }
  sendData() {
    const newData = { message: 'Hello from Sender!' };
  }
  onSubmit() {
    this.isSubmit = true;
    if (this.studentInfo.valid) {

      console.log(this.studentInfo.value);
    }
    else
      return
  }
}
