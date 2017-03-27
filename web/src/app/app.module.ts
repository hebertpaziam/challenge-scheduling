import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

//MODULES
import { AllocationModule } from "./allocation/allocation.module";
import { CustomerModule } from './customer/customer.module';
import { ProjectModule } from './project/project.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';

//ROUTING
import { appRouting } from "./app.routing";

//SERVICES
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthService } from './shared/auth/auth.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';

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