import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Allocation } from '../../shared/models/allocation.model';

//SERVICES
import { AllocationService } from "../../shared/services/allocation.service";

@Component({
    moduleId: module.id,
    templateUrl: './allocation-details.component.html'
})
export class AllocationDetailsComponent implements OnInit {

    private action: string;
    private allocation: Allocation = new Allocation();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private allocationService: AllocationService
    ) { }

    ngOnInit() {
        console.log(this.route.snapshot)
        this.route.params.subscribe((params: Params) => {
            this.allocation.id = +params['id'];
            this.action = params['action'];
        });

        this.allocationService.getAllocationById(this.allocation).then((allocation: Allocation) => { this.allocation = allocation }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "novo"
        this.allocation = Object.assign({}, new Allocation());
    }
    onEdit() {
        this.action = "editar"
    }

    save() {
        if (this.action === "editar") this.allocationService.updateAllocation(this.allocation).then(() => { this.router.navigate(['/alocacoes']) })
        else if (this.action === "novo") this.allocationService.createAllocation(this.allocation).then(() => { this.router.navigate(['/alocacoes']) })
        else console.log("Ação inválida!!");
    }

    delete() {
        this.allocationService.deleteAllocation(this.allocation).then(() => { this.router.navigate(['/alocacoes']) })
    }

    goBack() {
        this.location.back();
    }

}