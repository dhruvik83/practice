import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

export interface PeriodicElement {
  name: string;
  position: number;

  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatInputModule, MatProgressSpinnerModule, MatRadioModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
  encapsulation: ViewEncapsulation.None
})


export class MaterialComponent {

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() {
    this.LoadData()
  }
  ELEMENT_DATA: any = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  LoadData() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  }
  SearchValueChange(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }
}
