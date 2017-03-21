import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/customer.model';
import { Professional } from '../../professional/shared/professional.model';

import { CustomerService } from '../shared/customer.service';
import { ProfessionalService } from '../../professional/shared/professional.service';

@Component({
    moduleId: module.id,
    selector: 'ava-customer-list',
    templateUrl: './customer-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class CustomerListComponent implements OnInit {

    constructor(private _customerService: CustomerService, private _professionalService: ProfessionalService) { }

    private customers: Customer[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._customerService.getCustomers().then((customerList: Customer[]) => this.customers = customerList).catch((error: Error) => { throw error });
    }

    getSponsorName(customer: Customer): string {
        return this.sponsors.find(s => s.professionalId === customer.sponsor).name
    }
}
