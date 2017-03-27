import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Role } from '../../shared/models/role.model';

//SERVICES
import { RoleService } from "../../shared/services/role.service";

@Component({
    moduleId: module.id,
    templateUrl: './role-details.component.html'
})
export class RoleDetailsComponent implements OnInit {

    private action: string;
    private role: Role = new Role();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private roleService: RoleService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.role.id = +params['id'];
            this.action = params['action'];
        });

        this.roleService.getRoleById(this.role).then((role: Role) => { this.role = role }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "novo"
        this.role = Object.assign({}, new Role());
    }
    onEdit() {
        this.action = "editar"
    }

    save() {
        if (this.action === "editar") this.roleService.updateRole(this.role).then(() => { this.router.navigate(['/cargos']) })
        else if (this.action === "novo") this.roleService.createRole(this.role).then(() => { this.router.navigate(['/cargos']) })
        else console.log("Ação inválida!!");
    }

    delete() {
        this.roleService.deleteRole(this.role).then(() => { this.router.navigate(['/cargos']) })
    }

    goBack() {
        this.location.back();
    }

}