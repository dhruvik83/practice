import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp1.component.html',
  styleUrl: './temp1.component.css'  
})
export class Temp1Component implements OnInit {
  
  ngOnInit(): void {  } 
}
