import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { response } from 'express';
 
@Injectable({
  providedIn: 'root'
})
export class DocxExportService {
  private apiUrl = 'http://localhost:5287/api/payment/CreatePaymentIntent';

  constructor(private http: HttpClient,private commonService:CommonService) { }

  createPaymentIntent(amount: number){
    this.commonService.doPost(this.apiUrl, { amount: amount }).subscribe(
    {
      next:(response)=>{
        console.log(response);
      }
    }
    );    
  }

}
