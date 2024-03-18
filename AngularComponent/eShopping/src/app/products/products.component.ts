import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [
    {
      category: 'T-Shirt',
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt.jpg',
    },
    {
      category: 'Hoodie',
      stock: 'Available',
      description: 'Warm hoodie with front pocket and drawstrings',
      price: 35.99,
      image: 'assets/img/product/hoodie.jpg',
    },
    {
      category: 'Jeans',
      stock: 'Stock Out',
      description: 'Classic denim jeans with a modern fit',
      price: 45.99,
      image: 'assets/img/product/jeans.jpg',
    },
    {
      category: 'Jeans',
      stock: 'Available',
      description: 'Classic denim jeans with a modern fit',
      price: 40.99,
      image: 'assets/img/product/jeans2.jpg',
    },
    {
      category: 'T-Shirt',
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt2.jpg',
    },
    {
      category: 'T-Shirt',
      stock: 'Available',
      description: 'Comfortable cotton T-shirt with brand logo',
      price: 20.99,
      image: 'assets/img/product/tshirt3.jpg',
    },
    {
      category: 'Jeans',
      stock: 'Available',
      description: 'Classic denim jeans with a modern fit',
      price: 40.99,
      image: 'assets/img/product/jeans3.jpg',
    },
    {
      category: 'Hoodie',
      stock: 'Available',
      description: 'Warm hoodie with front pocket and drawstrings',
      price: 35.99,
      image: 'assets/img/product/hoodie2.jpg',
    }
  ]
  getTotalTshirts(){
    return this.products.filter(tshirt=>tshirt.category==="T-Shirt").length;
  }
  getTotalHoodies(){
    return this.products.filter(tshirt=>tshirt.category==="Hoodie").length;
  }
  getTotalJeans(){
    return this.products.filter(tshirt=>tshirt.category==="Jeans").length;
  }
}
