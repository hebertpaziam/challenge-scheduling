import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouting } from "./app.routing";

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { ProjectModule } from './project/project.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';

import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
    imports: [
        BrowserModule,
        BookingModule,
        ProfessionalModule,
        RoleModule,
        CustomerModule,
        HttpModule,
        ProjectModule,
        appRouting
    ],
    declarations: [AppComponent, LoaderComponent],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }