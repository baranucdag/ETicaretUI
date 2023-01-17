import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/admin/components/products/products/products.component';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ])
  ]
})
export class ProductsModule { }
