import { IProject } from './project.interface';

export class Project implements IProject {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
    deleted: boolean;
}