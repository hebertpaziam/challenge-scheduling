import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

//services
import { RoleService } from "../shared/services/role.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { roleRouting } from './role.routing';

@NgModule({
    imports: [SharedModule, roleRouting],
    declarations: [RoleComponent,RoleListComponent, RoleDetailsComponent],
    providers: [RoleService, ProfessionalService]
})

export class RoleModule { }