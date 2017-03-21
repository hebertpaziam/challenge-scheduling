import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { ProfessionalService } from "../../shared/services/professional.service";

@Component({
    moduleId: module.id,
    templateUrl: './professional-details.component.html'
})
export class ProfessionalDetailsComponent implements OnInit {

    public action: string;

    private professional: Professional = new Professional();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.professional.id = +params['id'];
            this.action = params['action'];
        });

        this._professionalService.getProfessionalById(this.professional).then((professional: Professional) => { this.professional = professional }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.professional = Object.assign({}, new Professional());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._professionalService.updateProfessional(this.professional).then(() => { this._router.navigate(['/professionals']) })
        else if (this.action === "new") this._professionalService.createProfessional(this.professional).then(() => { this._router.navigate(['/professionals']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._professionalService.deleteProfessional(this.professional).then(() => { this._router.navigate(['/professionals']) })
    }

    goBack() {
        this._location.back();
    }

}