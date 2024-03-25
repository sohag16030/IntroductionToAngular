import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'], // Use styleUrls instead of styleUrl
})
export class CustomerListComponent {
  selectedCustomer: any;

  customers: Customer[] = [
    new Customer("1", "John Doe", "123 Main St", "Anytown", "England"),
    new Customer("2", "Alice Smith", "456 Elm St", "Somewhere", "England"),
    new Customer("3", "Bob Johnson", "789 Oak St", "Nowhere", "England"),
    new Customer("4", "Emily Brown", "101 Pine St", "Everywhere", "England"),
    new Customer("5", "David Wilson", "222 Maple St", "Nowhere", "England"),
    new Customer("6", "Sarah Lee", "333 Cherry St", "Somewhere", "England")
  ];
  
}
