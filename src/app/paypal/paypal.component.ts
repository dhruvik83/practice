import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest, NgxPayPalModule } from 'ngx-paypal';
import { DataService } from '../services/data.service';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@Component({
  standalone: true,
  selector: 'app-paypal',
  imports: [NgxPayPalModule, GooglePayButtonModule],
  templateUrl: './paypal.component.html',
})
export class PaypalComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;
  receivedData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    console.log(this.receivedData)
    // this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  onLoadPaymentData(event: any) {
    console.log(event)
  }
}
