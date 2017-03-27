import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

//components
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

//services
import { RoleService } from "../shared/services/role.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { RoleRoutingModule } from './role.routing';

@NgModule({
    imports: [RoleRoutingModule, CommonModule, FormsModule, HttpModule, SharedModule],
    declarations: [RoleComponent,RoleListComponent, RoleDetailsComponent],
    providers: [RoleService, ProfessionalService]
})

export class RoleModule { }