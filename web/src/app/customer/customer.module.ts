import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

//services
import { CustomerService } from './shared/customer.service';
import { ProfessionalService } from './../professional/shared/professional.service';

//routing
import { customerRouting } from './customer.routing';

@NgModule({
    imports: [SharedModule, customerRouting],
    declarations: [CustomerComponent, CustomerDetailsComponent],
    providers: [CustomerService, ProfessionalService]
})

export class CustomerModule { }