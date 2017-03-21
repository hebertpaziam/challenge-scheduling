import { IProfessional } from './professional.interface';

export class Professional implements IProfessional {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
    deleted: boolean;
}