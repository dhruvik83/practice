import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  constructor(private dataService: DataService) {
    dataService.data.set(this.items)
  }


  addItem(newItemName: string) {
    this.items.push( {name: newItemName} );
    this.dataService.data.set(this.items);
  }

  removeItem() {
    const currentItems = this.items;
    if (currentItems.length > 0) {
      currentItems.pop();
      this.items=(currentItems);
      this.dataService.data.set(this.items);
    }
  }
}
