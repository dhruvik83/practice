import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  quantity: number;
}
@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CdkDropList, MatFormFieldModule, MatIconModule, CdkDrag, DragDropModule, MatTableModule, MatButtonModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.css'
})
export class DragDropComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild('table', { static: true }) table!: MatTable<PeriodicElement>;
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.81, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.011, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.007, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.180, symbol: 'Ne' }
  ];
  dragDisabled = true;

  drop(event: CdkDragDrop<any>) {
    this.dragDisabled = true;
    const previousIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
