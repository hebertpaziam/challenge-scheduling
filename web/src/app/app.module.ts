import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'app/shared/shared.module';

import { AppComponent } from 'app/app.component';
import { appRouting } from "app/app.routing";

import { AuthGuard } from 'app/shared/auth/auth.guard';
import { AuthService } from 'app/shared/auth/auth.service';

import { BookingModule } from "app/bookings/booking.module";
import { CustomerModule } from 'app/customers/customer.module';
import { ProjectModule } from 'app/projects/project.module';
import { ProfessionalModule } from 'app/professionals/professional.module';
import { RoleModule } from 'app/roles/role.module';

import { LoaderComponent } from 'app/shared/utilities/loader/loader.component';
import { AppHomeComponent } from 'app/app-home.component';

@NgModule({
    imports: [
        appRouting,
        BrowserModule,
        BookingModule,
        ProfessionalModule,
        RoleModule,
        CustomerModule,
        ProjectModule,
        SharedModule
    ],
    declarations: [AppComponent, AppHomeComponent],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }