import { Role } from './role.model';

export class Professional {
    id: number;
    pid: number;
    eid: number;
    name: string;
    email: string;
    role: Role;
    phone: string;
    deleted: boolean;
}