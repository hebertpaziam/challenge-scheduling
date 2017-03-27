import { Component, OnInit } from '@angular/core';

//MODELS
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { ProfessionalService } from "../../shared/services/professional.service";

@Component({
    moduleId: module.id,
    selector: 'ava-professional-list',
    templateUrl: './professional-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class ProfessionalListComponent implements OnInit {

    private professionals: Professional[];

    constructor(private professionalService: ProfessionalService) { }

    ngOnInit() {
        this.professionalService.getProfessionals().then((professionalList: Professional[]) => this.professionals = professionalList).catch((error: Error) => { throw error });
    }
}
