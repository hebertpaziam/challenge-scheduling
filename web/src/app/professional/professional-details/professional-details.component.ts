import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

//MODELS
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { ProfessionalService } from "../../shared/services/professional.service";

@Component({
    moduleId: module.id,
    templateUrl: './professional-details.component.html'
})
export class ProfessionalDetailsComponent implements OnInit {

    private action: string;
    private professional: Professional = new Professional();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private professionalService: ProfessionalService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.professional.id = +params['id'];
            this.action = params['action'];
        });

        this.professionalService.getProfessionalById(this.professional).then((professional: Professional) => { this.professional = professional }).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "novo"
        this.professional = Object.assign({}, new Professional());
    }
    onEdit() {
        this.action = "editar"
    }

    save() {
        if (this.action === "editar") this.professionalService.updateProfessional(this.professional).then(() => { this.router.navigate(['/profissionais']) })
        else if (this.action === "novo") this.professionalService.createProfessional(this.professional).then(() => { this.router.navigate(['/profissionais']) })
        else console.log("Ação inválida!!");
    }

    delete() {
        this.professionalService.deleteProfessional(this.professional).then(() => { this.router.navigate(['/profissionais']) })
    }

    goBack() {
        this.location.back();
    }

}