import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ava-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
       if(document.location.pathname === "/") this.router.navigate(["home"])
    }
}