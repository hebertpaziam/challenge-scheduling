import { Professional } from './professional';
import { Project } from './project';

export class Allocation {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
    //delete lógico
    deleted: boolean;
    //Propriedades de navegação
    project: Project;
    professional: Professional;
}