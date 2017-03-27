import { Role } from './role.model';

export class Professional {
    id: number;
    pid: number;
    eid: string;
    name: string;
    email: string;
    role: Role;
    phone: string;
    deleted: boolean;

    constructor() {
        this.role = new Role();
    }
}