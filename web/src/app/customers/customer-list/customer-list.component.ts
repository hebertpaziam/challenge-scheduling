import { Component, OnInit } from '@angular/core';

//MODELS
import { Customer } from '../../shared/models/customer.model';
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { CustomerService } from "../../shared/services/customer.service";
import { ProfessionalService } from "../../shared/services/professional.service";

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
        return this.sponsors.find(s => s.id === customer.sponsor.id).name
    }
}
