export class Customer {
    customerNo: string;
    name: string;
    address: string;
    city: string;
    country: string;

    constructor(customerNo: string, name: string, address: string, city: string, country: string) {
        this.customerNo = customerNo;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
    }
}
