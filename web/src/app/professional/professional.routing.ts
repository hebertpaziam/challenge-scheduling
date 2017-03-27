import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { ProfessionalComponent } from './professional.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: '',
            component: ProfessionalListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: ProfessionalDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ProfessionalRoutingModule {}