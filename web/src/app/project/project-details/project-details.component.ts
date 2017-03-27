import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Project } from '../../shared/models/project.model';

//SERVICES
import { ProjectService } from "../../shared/services/project.service";

@Component({
    moduleId: module.id,
    templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {

    private action: string;
    private project: Project = new Project();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.project.id = +params['id'];
            this.action = params['action'];
        });

        this.projectService.getProjectById(this.project).then((project: Project) => { this.project = project }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "novo"
        this.project = Object.assign({}, new Project());
    }
    onEdit() {
        this.action = "editar"
    }

    save() {
        if (this.action === "editar") this.projectService.updateProject(this.project).then(() => { this.router.navigate(['/projetos']) })
        else if (this.action === "novo") this.projectService.createProject(this.project).then(() => { this.router.navigate(['/projetos']) })
        else console.log("Ação inválida!!");
    }

    delete() {
        this.projectService.deleteProject(this.project).then(() => { this.router.navigate(['/projetos']) })
    }

    goBack() {
        this.location.back();
    }

}