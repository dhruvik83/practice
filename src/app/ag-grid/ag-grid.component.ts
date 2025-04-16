import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule ,CommonModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
  columnDefs:any = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
