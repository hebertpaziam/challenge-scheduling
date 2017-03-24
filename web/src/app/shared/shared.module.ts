import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './utilities/header/header.component';
import { LoaderComponent } from './utilities/loader/loader.component';
import { LoaderService } from './utilities/loader/loader.service';
import { PercentualFilter } from "./utilities/filters/percentual.pipe";

@NgModule({
    imports: [CommonModule, FormsModule, FormsModule, HttpModule],
    exports: [HeaderComponent, LoaderComponent, CommonModule, FormsModule, FormsModule, HttpModule],
    declarations: [HeaderComponent, LoaderComponent, PercentualFilter],
    providers: [LoaderService]
})

export class SharedModule { }