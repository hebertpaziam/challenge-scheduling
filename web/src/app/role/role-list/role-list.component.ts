import { Component, OnInit } from '@angular/core';

import { Role } from '../shared/role.model';
import { Professional } from '../../professional/shared/professional.model';

import { RoleService } from '../shared/role.service';
import { ProfessionalService } from '../../professional/shared/professional.service';

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
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._roleService.getRoles().then((roleList: Role[]) => this.roles = roleList).catch((error: Error) => { throw error });
    }

    getSponsorName(role: Role): string {
        return this.sponsors.find(s => s.professionalId === role.sponsor).name
    }
}
