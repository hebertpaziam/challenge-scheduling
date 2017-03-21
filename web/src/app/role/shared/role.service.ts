import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Role } from './role.model'


@Injectable()
export class RoleService {

    private url: string = '/api/role'

    constructor(private http: Http) { }

    createRole(role: Role): Promise<Role> {
        return this.http.post(`${this.url}/post`, JSON.stringify(role)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getRoleById(role: Role): Promise<Role> {
        return this.http.get(`${this.url}/${role.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getRoles(): Promise<Role[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => )
            .catch((error: Error) => this.errorHandling(error))
    }

    updateRole(role: Role): Promise<Role> {
        return this.http.put(`${this.url}/${role.id}`, JSON.stringify(role)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteRole(role: Role): Promise<boolean> {
        return this.http.delete(`${this.url}/${role.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));
    }

    extractData(response: Response): any {
        return response.json().data || response.json()
    }
    errorHandling(error: any): any {
        console.log(error)
    }

}