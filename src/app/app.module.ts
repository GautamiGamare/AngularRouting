import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { Routes, RouterModule } from '@angular/router';

const myroutes : Routes = [
  {path : '',component: AddProductComponent},
  {path : 'view' , component : ViewProductComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
