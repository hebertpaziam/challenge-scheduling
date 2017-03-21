import { Project } from './project.model';
import { Professional } from './professional.model';

export class Booking {
    id: number;
    project: Project;
    professional: Professional;
    startDate: Date;
    endDate: Date;
    percentual: number;
    deleted: boolean;
}