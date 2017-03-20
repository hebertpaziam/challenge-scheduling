import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, FormsModule, HttpModule],
    exports: [HeaderComponent, LoaderComponent, CommonModule, FormsModule, HttpModule, FormsModule, HttpModule],
    declarations: [HeaderComponent, LoaderComponent],
    providers: [LoaderService]
})

export class SharedModule { }