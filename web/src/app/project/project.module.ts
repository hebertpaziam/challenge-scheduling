import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

//components
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

//services
import { ProjectService } from "../shared/services/project.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { ProjectRoutingModule } from './project.routing';

@NgModule({
    imports: [ProjectRoutingModule, SharedModule],
    declarations: [ProjectComponent,ProjectListComponent, ProjectDetailsComponent],
    providers: [ProjectService, ProfessionalService]
})

export class ProjectModule { }