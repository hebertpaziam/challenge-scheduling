import { Component, OnInit } from '@angular/core';

//MODELS
import { Customer } from '../../shared/models/customer.model';

//SERVICES
import { CustomerService } from "../../shared/services/customer.service";

@Component({
    moduleId: module.id,
    selector: 'ava-customer-list',
    templateUrl: './customer-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class CustomerListComponent implements OnInit {

    private customers: Customer[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomers().then((customerList: Customer[]) => this.customers = customerList).catch((error: Error) => { throw error });
    }
}
