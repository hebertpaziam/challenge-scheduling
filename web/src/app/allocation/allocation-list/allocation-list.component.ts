import { Component, OnInit } from '@angular/core';

//MODELS
import { Allocation } from '../../shared/models/allocation.model';
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { AllocationService } from "../../shared/services/allocation.service";
import { ProfessionalService } from "../../shared/services/professional.service";


@Component({
    moduleId: module.id,
    selector: 'ava-allocation-list',
    templateUrl: './allocation-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class AllocationListComponent implements OnInit {

    constructor(private _allocationService: AllocationService, private _professionalService: ProfessionalService) { }

    private allocations: Allocation[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._allocationService.getAllocations().then((allocationList: Allocation[]) => this.allocations = allocationList).catch((error: Error) => { throw error });
    }

    getSponsorName(allocation: Allocation): string {
        return this.sponsors.find(s => s.id === allocation.professional.id).name
    }
}
