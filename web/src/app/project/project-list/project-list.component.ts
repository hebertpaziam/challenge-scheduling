import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { Professional } from '../../professional/shared/professional.model';

import { ProjectService } from '../shared/project.service';
import { ProfessionalService } from '../../professional/shared/professional.service';

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
        return this.sponsors.find(s => s.professionalId === project.sponsor).name
    }
}
