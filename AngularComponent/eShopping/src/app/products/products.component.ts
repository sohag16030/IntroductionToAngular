import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/thsirt.jpg',
    },
    {
      name: 'Hoodie',
      description: 'Warm hoodie with front pocket and drawstrings',
      price: 35.99,
      image: 'assets/img/product/hoodie.jpg',
    },
    {
      name: 'Jeans',
      description: 'Classic denim jeans with a modern fit',
      price: 45.99,
      image: 'assets/img/product/jeans.jpg',
    },
    {
      name: 'Jeans',
      description: 'Classic denim jeans with a modern fit',
      price: 40.99,
      image: 'assets/img/product/jeans2.jpg',
    }
  ];
}
