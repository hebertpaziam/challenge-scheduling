import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './utilities/header/header.component';
import { LoaderComponent } from './utilities/loader/loader.component';
import { LoaderService } from './utilities/loader/loader.service';
import { PercentualFilter } from "./utilities/filters/percentual.pipe";

@NgModule({
    imports: [CommonModule, FormsModule, FormsModule, HttpModule, BrowserModule, BrowserModule, RouterModule],
    exports: [HeaderComponent, LoaderComponent, CommonModule, FormsModule, FormsModule, HttpModule, RouterModule],
    declarations: [HeaderComponent, LoaderComponent, PercentualFilter],
    providers: [LoaderService]
})

export class SharedModule { }