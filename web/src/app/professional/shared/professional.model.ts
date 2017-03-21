import { IProfessional } from './professional.interface';
import { Role } from '../../role/shared/role.model'

export class Professional implements IProfessional {
    
    professionalId: number;
    pid: number;
    eid: number;
    name: string;
    roleId: number;
    email: string;
    phone: string;
    deleted: boolean;
    role: Role;
}