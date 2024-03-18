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
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt.jpg',
    },
    {
      name: 'Hoodie',
      stock: 'Available',
      description: 'Warm hoodie with front pocket and drawstrings',
      price: 35.99,
      image: 'assets/img/product/hoodie.jpg',
    },
    {
      name: 'Jeans',
      stock: 'Stock Out',
      description: 'Classic denim jeans with a modern fit',
      price: 45.99,
      image: 'assets/img/product/jeans.jpg',
    },
    {
      name: 'Jeans',
      stock: 'Available',
      description: 'Classic denim jeans with a modern fit',
      price: 40.99,
      image: 'assets/img/product/jeans2.jpg',
    },
    {
      name: 'T-Shirt',
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt2.jpg',
    },
    {
      name: 'T-Shirt',
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt3.jpg',
    },
    {
      name: 'Jeans',
      stock: 'Available',
      description: 'Classic denim jeans with a modern fit',
      price: 40.99,
      image: 'assets/img/product/jeans3.jpg',
    },
    {
      name: 'Hoodie',
      stock: 'Available',
      description: 'Warm hoodie with front pocket and drawstrings',
      price: 35.99,
      image: 'assets/img/product/hoodie2.jpg',
    }
  ];
}
