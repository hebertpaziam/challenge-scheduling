import { Component, OnInit } from '@angular/core';

//MODELS
import { Role } from "../../shared/models/role.model";
import { Professional } from "../../shared/models/professional.model";

//SERVICES
import { RoleService } from "../../shared/services/role.service";
import { ProfessionalService } from "../../shared/services/professional.service";

@Component({
    moduleId: module.id,
    selector: 'ava-role-list',
    templateUrl: './role-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class RoleListComponent implements OnInit {

    constructor(private _roleService: RoleService, private _professionalService: ProfessionalService) { }

    private roles: Role[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._roleService.getRoles().then((roleList: Role[]) => this.roles = roleList).catch((error: Error) => { throw error });
    }
}
