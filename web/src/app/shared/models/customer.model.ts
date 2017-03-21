import { Professional } from './professional.model';

export class Customer {
    id: number;
    name: string;
    cnpj: number;
    contact: string;
    email: string;
    sponsor: Professional;
    deleted: boolean;
}