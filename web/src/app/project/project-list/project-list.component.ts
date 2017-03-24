import { Component, OnInit } from '@angular/core';

//MODELS
import { Project } from "../../shared/models/project.model";
import { Professional } from "../../shared/models/professional.model";

//SERVICES
import { ProjectService } from "../../shared/services/project.service";
import { ProfessionalService } from "../../shared/services/professional.service";


@Component({
    moduleId: module.id,
    selector: 'ava-project-list',
    templateUrl: './project-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class ProjectListComponent implements OnInit {

    constructor(private _projectService: ProjectService, private _professionalService: ProfessionalService) { }

    private projects: Project[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._projectService.getProjects().then((projectList: Project[]) => this.projects = projectList).catch((error: Error) => { throw error });
    }

    getSponsorName(project: Project): string {
        return this.sponsors.find(s => s.id === project.professional.id).name
    }
}
