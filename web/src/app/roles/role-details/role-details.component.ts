import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Role } from "../../shared/models/role.model";
import { Professional } from "../../shared/models/professional.model";

//SERVICES
import { RoleService } from "../../shared/services/role.service";
import { ProfessionalService } from "../../shared/services/professional.service";

@Component({
    moduleId: module.id,
    templateUrl: './role-details.component.html'
})
export class RoleDetailsComponent implements OnInit {

    public action: string;

    private role: Role = new Role();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _roleService: RoleService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.role.id = +params['id'];
            this.action = params['action'];
        });

        this._roleService.getRoleById(this.role).then((role: Role) => { this.role = role }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.role = Object.assign({}, new Role());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._roleService.updateRole(this.role).then(() => { this._router.navigate(['/roles']) })
        else if (this.action === "new") this._roleService.createRole(this.role).then(() => { this._router.navigate(['/roles']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._roleService.deleteRole(this.role).then(() => { this._router.navigate(['/roles']) })
    }

    goBack() {
        this._location.back();
    }

}