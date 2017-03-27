import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Allocation } from '../models/allocation.model'


@Injectable()
export class AllocationService {

    private url: string = '/api/allocation'

    constructor(private http: Http) { }

    createAllocation(allocation: Allocation): Promise<Allocation> {
        return this.http.post(`${this.url}/post`, JSON.stringify(allocation)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getAllocationById(allocation: Allocation): Promise<Allocation> {
        return this.http.get(`${this.url}/${allocation.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getAllocations(): Promise<Allocation[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    updateAllocation(allocation: Allocation): Promise<Allocation> {
        return this.http.put(`${this.url}/${allocation.id}`, JSON.stringify(allocation)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteAllocation(allocation: Allocation): Promise<boolean> {
        return this.http.delete(`${this.url}/${allocation.id}`).toPromise()
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