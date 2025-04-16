import { NgModule } from '@angular/core';
import { TempComponent } from './temp/temp.component';
import { Temp1Component } from './temp1/temp1.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { MaterialComponent } from './material/material.component';
import { FormComponent } from './form/form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SignalComponent } from './signal/signal.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'temp',
    title: 'First component',
    component: TempComponent,
    children: [
      {
        path: 'temp1',
        title: 'TempComponent',
        component: Temp1Component,
      }
    ],
  },

  { path: 'agGrid', component: AgGridComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'form', component: FormComponent },
  { path: 'formArray', component: FormArrayComponent },
  { path: 'payment', component: PaypalComponent },
  { path: 'primeng', component: PrimeNgComponent },
  { path: 'drag-drop', component: DragDropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
