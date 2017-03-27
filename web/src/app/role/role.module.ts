import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
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
import { roleRouting } from './role.routing';

@NgModule({
    imports: [roleRouting, CommonModule, FormsModule, HttpModule, SharedModule, BrowserModule],
    declarations: [RoleComponent,RoleListComponent, RoleDetailsComponent],
    providers: [RoleService, ProfessionalService]
})

export class RoleModule { }