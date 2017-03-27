import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth/auth.guard';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';

import { AllocationModule } from './allocation/allocation.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';
import { CustomerModule } from './customer/customer.module';
import { ProjectModule } from './project/project.module';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'alocacoes',
            loadChildren: './allocation/allocation.module#AllocationModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'profissionais',
            loadChildren: './professional/professional.module#ProfessionalModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'cargos',
            loadChildren: './role/role.module#RoleModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'clientes',
            loadChildren: './customer/customer.module#CustomerModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'projetos',
            loadChildren: './project/project.module#ProjectModule',
            canLoad: [AuthGuard],
        },
    ]
},
{
    path: 'home',
    component: AppHomeComponent
}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}