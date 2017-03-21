import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { appRouting } from "./app.routing";

import { AuthGuard } from './shared/auth/auth.guard';
import { AuthService } from './shared/auth/auth.service';

import { BookingModule } from "./bookings/booking.module";
import { CustomerModule } from './customers/customer.module';
import { ProjectModule } from './projects/project.module';
import { ProfessionalModule } from './professionals/professional.module';
import { RoleModule } from './roles/role.module';

import { LoaderComponent } from './shared/utilities/loader/loader.component';
import { AppHomeComponent } from './app-home.component';

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