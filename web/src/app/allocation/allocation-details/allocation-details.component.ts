import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Allocation } from '../../shared/models/allocation.model';
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { ProfessionalService } from "../../shared/services/professional.service";
import { AllocationService } from "../../shared/services/allocation.service";

@Component({
    moduleId: module.id,
    templateUrl: './allocation-details.component.html'
})
export class AllocationDetailsComponent implements OnInit {

    public action: string;

    private allocation: Allocation = new Allocation();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _allocationService: AllocationService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.allocation.id = +params['id'];
            this.action = params['action'];
        });

        this._allocationService.getAllocationById(this.allocation).then((allocation: Allocation) => { this.allocation = allocation }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.allocation = Object.assign({}, new Allocation());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._allocationService.updateAllocation(this.allocation).then(() => { this._router.navigate(['/allocations']) })
        else if (this.action === "new") this._allocationService.createAllocation(this.allocation).then(() => { this._router.navigate(['/allocations']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._allocationService.deleteAllocation(this.allocation).then(() => { this._router.navigate(['/allocations']) })
    }

    goBack() {
        this._location.back();
    }

}