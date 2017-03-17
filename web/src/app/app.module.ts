import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { ProjectModule } from './project/project.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';

import { AppComponent } from './app.component';

import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
    imports: [ BrowserModule,
               BookingModule, 
               ProfessionalModule, 
               RoleModule, 
               CustomerModule,
               HttpModule, 
               ProjectModule,
    RouterModule.forRoot([
        { path: '', redirectTo:'/', pathMatch:'full'},
    ])],

    declarations: [AppComponent, LoaderComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }