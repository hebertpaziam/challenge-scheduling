import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Professional } from './professional.model'


@Injectable()
export class ProfessionalService {

    private url: string = '/api/professional'

    constructor(private http: Http) { }

    createProfessional(professional: Professional): Promise<Professional> {
        return this.http.post(`${this.url}/post`, JSON.stringify(professional)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getProfessionalById(professional: Professional): Promise<Professional> {
        return this.http.get(`${this.url}/${professional.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getProfessionals(): Promise<Professional[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => )
            .catch((error: Error) => this.errorHandling(error))
    }

    updateProfessional(professional: Professional): Promise<Professional> {
        return this.http.put(`${this.url}/${professional.id}`, JSON.stringify(professional)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteProfessional(professional: Professional): Promise<boolean> {
        return this.http.delete(`${this.url}/${professional.id}`).toPromise()
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