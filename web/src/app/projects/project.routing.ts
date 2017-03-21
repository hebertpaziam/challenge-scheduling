import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { AuthGuard } from './../auth/auth.guard';

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

export const projectRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);