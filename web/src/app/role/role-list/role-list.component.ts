import { Component, OnInit } from '@angular/core';

//MODELS
import { Role } from '../../shared/models/role.model';

//SERVICES
import { RoleService } from "../../shared/services/role.service";

@Component({
    moduleId: module.id,
    selector: 'ava-role-list',
    templateUrl: './role-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class RoleListComponent implements OnInit {

    private roles: Role[];

    constructor(private roleService: RoleService) { }

    ngOnInit() {
        this.roleService.getRoles().then((roleList: Role[]) => this.roles = roleList).catch((error: Error) => { throw error });
    }
}
