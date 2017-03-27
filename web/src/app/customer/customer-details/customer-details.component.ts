import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Customer } from '../../shared/models/customer.model';

//SERVICES
import { CustomerService } from "../../shared/services/customer.service";

@Component({
    moduleId: module.id,
    templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

    private action: string;
    private customer: Customer = new Customer();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private customerService: CustomerService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.customer.id = +params['id'];
            this.action = params['action'];
        });

        this.customerService.getCustomerById(this.customer).then((customer: Customer) => { this.customer = customer }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "novo"
        this.customer = Object.assign({}, new Customer());
    }
    onEdit() {
        this.action = "editar"
    }

    save() {
        if (this.action === "editar") this.customerService.updateCustomer(this.customer).then(() => { this.router.navigate(['/clientes']) })
        else if (this.action === "novo") this.customerService.createCustomer(this.customer).then(() => { this.router.navigate(['/clientes']) })
        else console.log("Ação inválida!!");
    }

    delete() {
        this.customerService.deleteCustomer(this.customer).then(() => { this.router.navigate(['/clientes']) })
    }

    goBack() {
        this.location.back();
    }

}