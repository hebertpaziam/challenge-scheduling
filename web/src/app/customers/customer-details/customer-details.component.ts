import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Customer } from '../../shared/models/customer.model';
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { CustomerService } from "app/shared/services/customer.service";
import { ProfessionalService } from "app/shared/services/professional.service";

@Component({
    moduleId: module.id,
    templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

    public action: string;

    private customer: Customer = new Customer();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _customerService: CustomerService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.customer.id = +params['id'];
            this.action = params['action'];
        });

        this._customerService.getCustomerById(this.customer).then((customer: Customer) => { this.customer = customer }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.customer = Object.assign({}, new Customer());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._customerService.updateCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
        else if (this.action === "new") this._customerService.createCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._customerService.deleteCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
    }

    goBack() {
        this._location.back();
    }

}