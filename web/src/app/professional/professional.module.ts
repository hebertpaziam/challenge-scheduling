import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

//components
import { ProfessionalComponent } from './professional.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

//services
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { ProfessionalRoutingModule } from './professional.routing';

@NgModule({
    imports: [ProfessionalRoutingModule, CommonModule, FormsModule, HttpModule, SharedModule],
    declarations: [ProfessionalComponent,ProfessionalListComponent, ProfessionalDetailsComponent],
    providers: [ProfessionalService]
})

export class ProfessionalModule { }