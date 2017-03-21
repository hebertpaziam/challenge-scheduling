import { Professional } from './professional.model';
import { Customer } from './customer.model';

export class Project {
    id: number;
    name: string;
    customer: Customer;
    startDate: Date;
    endDate: Date;
    wbs: string;
    professional: Professional;
    deleted: boolean;
}