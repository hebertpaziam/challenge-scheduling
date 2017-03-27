import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Professional } from '../models/professional.model'

import { PROFESSIONALS } from '../mock'


@Injectable()
export class ProfessionalService {

    private url: string = '/api/professional'

    constructor(private http: Http) { }

    createProfessional(professional: Professional): Promise<Professional> {
        /*return this.http.post(`${this.url}/post`, JSON.stringify(professional)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        PROFESSIONALS.push(professional);
        return Promise.resolve(professional)
    }

    getProfessionalById(professional: Professional): Promise<Professional> {
        /*return this.http.get(`${this.url}/${professional.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(PROFESSIONALS.find(obj => obj.id === professional.id))
    }

    getProfessionals(): Promise<Professional[]> {
        /*return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(PROFESSIONALS);
    }

    updateProfessional(professional: Professional): Promise<Professional> {
        /*return this.http.put(`${this.url}/${professional.id}`, JSON.stringify(professional)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        let foundIndex = PROFESSIONALS.findIndex(obj => obj.id == professional.id);
        PROFESSIONALS[foundIndex] = professional;
        return Promise.resolve(PROFESSIONALS[foundIndex]);
    }

    deleteProfessional(professional: Professional): Promise<boolean> {
        /*return this.http.delete(`${this.url}/${professional.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));*/

        let removed: boolean = false;
        try {
            let indexToRemove = PROFESSIONALS.findIndex(obj => obj.id == professional.id);
            PROFESSIONALS.splice(indexToRemove, 1)
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