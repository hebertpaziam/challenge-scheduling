import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { AllocationComponent } from './allocation.component';
import { AllocationListComponent } from './allocation-list/allocation-list.component';
import { AllocationDetailsComponent } from './allocation-details/allocation-details.component';

//services
import { AllocationService } from "../shared/services/allocation.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { AllocationRoutingModule } from './allocation.routing';

@NgModule({
    imports: [AllocationRoutingModule, SharedModule],
    declarations: [AllocationComponent, AllocationListComponent, AllocationDetailsComponent],
    providers: [AllocationService, ProfessionalService]
})

export class AllocationModule { }