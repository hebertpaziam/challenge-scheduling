import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'projects',
            component: ProjectListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: ProjectDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {}