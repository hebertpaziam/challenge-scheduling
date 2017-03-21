import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

//services
import { ProjectService } from './shared/project.service';
import { ProfessionalService } from './../professional/shared/professional.service';

//routing
import { projectRouting } from './project.routing';

@NgModule({
    imports: [SharedModule, projectRouting],
    declarations: [ProjectComponent, ProjectDetailsComponent],
    providers: [ProjectService, ProfessionalService]
})

export class ProjectModule { }