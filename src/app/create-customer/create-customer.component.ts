import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private cutomerService: CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  newCustomer(): void{
    this.submitted = false;
    this.customer = new Customer();
  }

  save(){
    this.cutomerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/customers']);
  }

}
