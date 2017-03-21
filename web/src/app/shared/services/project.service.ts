import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Project } from '../models/project.model'


@Injectable()
export class ProjectService {

    private url: string = '/api/project'

    constructor(private http: Http) { }

    createProject(project: Project): Promise<Project> {
        return this.http.post(`${this.url}/post`, JSON.stringify(project)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getProjectById(project: Project): Promise<Project> {
        return this.http.get(`${this.url}/${project.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getProjects(): Promise<Project[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    updateProject(project: Project): Promise<Project> {
        return this.http.put(`${this.url}/${project.id}`, JSON.stringify(project)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteProject(project: Project): Promise<boolean> {
        return this.http.delete(`${this.url}/${project.id}`).toPromise()
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