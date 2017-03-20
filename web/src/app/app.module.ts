import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouting } from "./app.routing";

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { ProjectModule } from './project/project.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';

import { LoaderComponent } from './shared/loader/loader.component';
import { AppHomeComponent } from './app-home.component';

@NgModule({
    imports: [
        AppRouting,
        BrowserModule,
        BookingModule,
        ProfessionalModule,
        RoleModule,
        CustomerModule,
        HttpModule,
        ProjectModule,
        SharedModule
    ],
    declarations: [AppComponent, AppHomeComponent],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }