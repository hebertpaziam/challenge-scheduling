import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'ava-lod-app',
    template: `<span class="modal-backdrop fade in" *ngIf="loaderService.loading">
                    <img src="assets/images/loading.svg" alt="Loading..."/>
               </span>`,
    styles: [`img{
                transform:translateX(-50%) translateY(-50%);
                left:50%;
                top:50%;
                position:absolute;
            }
            .modal-backdrop {
                cursor:wait
            }`]
})


export class LoaderComponent {

    constructor(private loaderService: LoaderService) { }
}