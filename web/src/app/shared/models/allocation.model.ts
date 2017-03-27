import { Project } from './project.model';
import { Professional } from './professional.model';

export class Allocation {
    id: number;
    project: Project;
    professional: Professional;
    startDate: Date;
    endDate: Date;
    percentual: number;
    deleted: boolean;

    constructor() {
        this.project = new Project();
        this.professional = new Professional();
    }

}