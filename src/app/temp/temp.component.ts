import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css',
})
export class TempComponent implements OnInit {
  data: any;
  card: any;
  paymentUrl!: string;
  qrCodeDataUrl: any;
  amount!: number;
  constructor(private http: HttpClient,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }
  onScroll() {
    console.log('scrolled!!');
  }
}