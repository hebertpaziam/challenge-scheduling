import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Project } from '../models/project.model'

import { PROJECTS } from '../mock'


@Injectable()
export class ProjectService {

    private url: string = '/api/project'

    constructor(private http: Http) { }

    createProject(project: Project): Promise<Project> {
        /*return this.http.post(`${this.url}/post`, JSON.stringify(project)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        PROJECTS.push(project);
        return Promise.resolve(project)
    }

    getProjectById(project: Project): Promise<Project> {
        /*return this.http.get(`${this.url}/${project.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(PROJECTS.find(obj => obj.id === project.id))
    }

    getProjects(): Promise<Project[]> {
        /*return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(PROJECTS);
    }

    updateProject(project: Project): Promise<Project> {
        /*return this.http.put(`${this.url}/${project.id}`, JSON.stringify(project)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        let foundIndex = PROJECTS.findIndex(obj => obj.id == project.id);
        PROJECTS[foundIndex] = project;
        return Promise.resolve(PROJECTS[foundIndex]);
    }

    deleteProject(project: Project): Promise<boolean> {
        /*return this.http.delete(`${this.url}/${project.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));*/

        let removed: boolean = false;
        try {
            let indexToRemove = PROJECTS.findIndex(obj => obj.id == project.id);
            PROJECTS.splice(indexToRemove, 1)
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