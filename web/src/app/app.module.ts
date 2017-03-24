import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

//MODULES
import { BookingModule } from "app/bookings/booking.module";
import { CustomerModule } from 'app/customers/customer.module';
import { ProjectModule } from 'app/projects/project.module';
import { ProfessionalModule } from 'app/professionals/professional.module';
import { RoleModule } from 'app/roles/role.module';

//ROUTING
import { appRouting } from "app/app.routing";

//SERVICES
import { AuthGuard } from 'app/shared/auth/auth.guard';
import { AuthService } from 'app/shared/auth/auth.service';

//COMPONENTS
import { AppComponent } from 'app/app.component';
import { AppHomeComponent } from 'app/app-home.component';

@NgModule({
    imports: [
        appRouting,
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule
    ],
    declarations: [AppComponent, AppHomeComponent],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }