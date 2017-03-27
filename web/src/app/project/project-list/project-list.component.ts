import { Component, OnInit } from '@angular/core';

//MODELS
import { Project } from '../../shared/models/project.model';

//SERVICES
import { ProjectService } from "../../shared/services/project.service";

@Component({
    moduleId: module.id,
    selector: 'ava-project-list',
    templateUrl: './project-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class ProjectListComponent implements OnInit {

    private projects: Project[];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getProjects().then((projectList: Project[]) => this.projects = projectList).catch((error: Error) => { throw error });
    }
}
