import { IProject } from './project.interface';
import { Professional } from '../../professional/shared/professional.model';
import { Customer } from '../../customer/shared/customer.model';

export class Project implements IProject {
    projectId: number;
    name: string;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;

    customerId: number;
    sponsorId: number;

    customer: Customer;
    professional: Professional;

    deleted: boolean;
}