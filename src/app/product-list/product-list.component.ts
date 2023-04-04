import { Component } from '@angular/core';

import { products } from '../products';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // products = products;
  products:Product = products;

  // number:number=5;
  // stname:string="";
  // all1:any=0;
  // all2:any="";

  // students=[
  //   {
  //     name:"1郎",
  //     gender:"男",
  //     age:40
  //   },
  //   {
  //     name:"2郎",
  //     gender:"女",
  //     age:20
  //   },
  //   {
  //     name:"3郎",
  //     gender:"男",
  //     age:40
  //   },
  // ]
  // students=["太郎","２郎","３郎"]; 
  // student2="次郎";
  // student3="三浪";
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/