import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"  
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [CalendarModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    CascadeSelectModule,
    ChipsModule,
    FloatLabelModule,
    InputIconModule,
    IconFieldModule,
    ReactiveFormsModule],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css'
})
export class PrimeNgComponent {
  maxDate = new Date();
  formGroup!: FormGroup;
receivedData: any;
  constructor(private dataService: DataService) {}
  ngOnInit() {
   
    this.formGroup = new FormGroup({
      values: new FormControl<string[] | null>(null)
    });
  }
  submit() {
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }
}
