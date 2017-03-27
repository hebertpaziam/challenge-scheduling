import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Role } from '../models/role.model'

import { ROLES } from '../mock'


@Injectable()
export class RoleService {

    private url: string = '/api/role'

    constructor(private http: Http) { }

    createRole(role: Role): Promise<Role> {
        /*return this.http.post(`${this.url}/post`, JSON.stringify(role)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        ROLES.push(role);
        return Promise.resolve(role)
    }

    getRoleById(role: Role): Promise<Role> {
        /*return this.http.get(`${this.url}/${role.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(ROLES.find(obj => obj.id === role.id))
    }

    getRoles(): Promise<Role[]> {
        /*return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(ROLES);
    }

    updateRole(role: Role): Promise<Role> {
        /*return this.http.put(`${this.url}/${role.id}`, JSON.stringify(role)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        let foundIndex = ROLES.findIndex(obj => obj.id == role.id);
        ROLES[foundIndex] = role;
        return Promise.resolve(ROLES[foundIndex]);
    }

    deleteRole(role: Role): Promise<boolean> {
        /*return this.http.delete(`${this.url}/${role.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));*/

        let removed: boolean = false;
        try {
            let indexToRemove = ROLES.findIndex(obj => obj.id == role.id);
            ROLES.splice(indexToRemove, 1)
            removed = true;
        } catch (e) {
            console.log("Object not removed")
            removed = false;
        }
        finally {
            return Promise.resolve(removed);
        }
    }

    extractData(response: Response): any {
        return response.json().data || response.json()
    }
    errorHandling(error: any): any {
        console.log(error)
    }

}