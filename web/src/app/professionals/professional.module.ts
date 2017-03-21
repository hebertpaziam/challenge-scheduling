import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { ProfessionalComponent } from './professional.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

//services
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { professionalRouting } from './professional.routing';

@NgModule({
    imports: [SharedModule, professionalRouting],
    declarations: [ProfessionalComponent,ProfessionalListComponent, ProfessionalDetailsComponent],
    providers: [ProfessionalService]
})

export class ProfessionalModule { }