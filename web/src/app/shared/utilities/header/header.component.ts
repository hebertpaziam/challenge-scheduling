import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ava-hdr-app',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input() pageName: string;
    @Input() icon: string;
    private iconClass: string;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.iconClass = `glyphicon ${this.icon}`;
    }

    redirectToNew() {
        this.router.navigate([document.location.pathname,"novo","0"])
    }
}