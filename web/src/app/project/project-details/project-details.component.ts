import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Project } from "../../shared/models/project.model";
import { Professional } from "../../shared/models/professional.model";

//SERVICES
import { ProjectService } from "../../shared/services/project.service";
import { ProfessionalService } from "../../shared/services/professional.service";


@Component({
    moduleId: module.id,
    templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {

    public action: string;

    private project: Project = new Project();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _projectService: ProjectService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.project.id = +params['id'];
            this.action = params['action'];
        });

        this._projectService.getProjectById(this.project).then((project: Project) => { this.project = project }).catch((error: Error) => { throw error });
        this.action = "new"
        this.project = Object.assign({}, new Project());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._projectService.updateProject(this.project).then(() => { this._router.navigate(['/projects']) })
        else if (this.action === "new") this._projectService.createProject(this.project).then(() => { this._router.navigate(['/projects']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._projectService.deleteProject(this.project).then(() => { this._router.navigate(['/projects']) })
    }

    goBack() {
        this._location.back();
    }

}